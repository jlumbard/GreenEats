import React from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function CameraService (props) {
  function handleTakePhoto (dataUri) {
    //where Brock is working

    // Do stuff with the photo...
    console.log('takePhoto');

    console.log(JSON.stringify({img:dataUri}));

    // var xhr = new XMLHttpRequest()

    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here
    //   console.log("response"+ xhr.responseText)
    // })

    // xhr.open('POST', 'http://localhost:5000/api/world')
    // // // send the request
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    // xhr.send(dataUri);

    fetch('http://localhost:5000/api/image',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'credentials': 'same-origin',
        "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        img: dataUri
      })
    }
    ).then(function(results){
      console.log("response:");
      results.json().then(x=>{
        console.log("Land Use: " +  x.LandUse/26);
        console.log("GHG: " +  x.GHG/9);
        console.log("Acid: " +  x.Acid/47);
        console.log("Eutrophying: " +  x.Eutrophying/47);
        console.log("Freshwater: " +  x.Freshwater/930);
        console.log("StressWeightedWater: " +  x.StressWeightedWater/36474);
        var avg = x.LandUse/26 + x.GHG/9 + x.Acid/47 + x.Eutrophying/47 + x.Freshwater/930 + x.StressWeightedWater/36474;
        window.alert("This food has an average of "+ avg);


        localStorage.setItem('LandUse', x.LandUse);
        localStorage.setItem('GHG', x.GHG);
        localStorage.setItem('Acid', x.Acid);
        localStorage.setItem('Eutrophying', x.Eutrophying);
        localStorage.setItem('Freshwater', x.Freshwater);
        localStorage.setItem('StressWeightedWater', x.StressWeightedWater);


      }
        );
    }
    )

  }

  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      imageType = {IMAGE_TYPES.JPG}
    />
  );
}

export default CameraService;