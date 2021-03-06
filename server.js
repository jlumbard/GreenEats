const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;


app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.img}`,
  );
});

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

var data = require('./perFUdata.js');

var datarows = data.foodImpacts.split("\n");

var fs = require('fs');

app.post('/api/image', (req, res) => {
  console.log("req:")
  //edits go here to switch from test images to real
  var tempVar;
  tempVar = req.body.img.split(",");
  // console.log("----------------------------------------------");
  const request = {
    image: {
      content: tempVar[1]
    }
  };

  console.log(request);

  var hasBeenFound = 0;
  client.webDetection(request
  ).then((label)=> {
    console.log("Got here");
    console.log(label);
    console.log(label[0].webDetection.webEntities)
    var targetRow;
  datarows.forEach(x=>{
    targetRow = x.split(",");

    if(label[0].webDetection.webEntities[0] == null){
      res.send("NO MATCH FOUND");
    }

    if(targetRow[0]==label[0].webDetection.webEntities[0].description){
    //do fuzzy matching
    
    console.log(label[0].webDetection.webEntities);
    console.log(x);
    hasBeenFound++;

    res.send({
      food:label[0].webDetection.webEntities[0].description,
      LandUse: targetRow[1],
      GHG:targetRow[2],
      Acid:targetRow[3],
      Eutrophying:targetRow[4],
      Freshwater:targetRow[5],
      StressWeightedWater:targetRow[6],
    }
      )
      return;
    }
  })

    })
    .catch(err=>{console.log("err "+err)});
});
app.listen(port, () => console.log(`Listening on port ${port}`));