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

var data = require('./data.js');

console.log(data.foodImpacts);

app.post('/api/image', (req, res) => {
  console.log(req.body);

  //get the image in the body here and then push it below
  //path not used, need to add img from request body
  const request = {
    image: {
      source: {imageUri:'./banana.jpg'}
    }
  };

  client.webDetection('yam.jpg'
  ).then((label)=> {
    console.log(label[0].webDetection.webEntities);

    res.send(
    label[0].webDetection.webEntities[0].description)}).catch(err=>{console.log("err "+err)});
});
app.listen(port, () => console.log(`Listening on port ${port}`));