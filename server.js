const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

var data = require('./perFUdata.js');

var datarows = data.foodImpacts.split("\n");



app.post('/api/image', (req, res) => {
  console.log(req.body);

  //get the image in the body here and then push it below
  //path not used, need to add img from request body

  

  const request = {
    image: {
      source: {imageUri:'./banana.jpg'}
    }
  };

  client.webDetection('banana.jpg'
  ).then((label)=> {

    var targetRow;
  datarows.forEach(x=>{
    targetRow = x.split(",");
    if(targetRow[0]==label[0].webDetection.webEntities[0].description){
    //do fuzzy matching

    
    console.log(label[0].webDetection.webEntities);
    console.log(x);

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
    }
  })

    })
    .catch(err=>{console.log("err "+err)});
});
app.listen(port, () => console.log(`Listening on port ${port}`));