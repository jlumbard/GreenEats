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
    ).then(x=>{
      console.log("response:");
      console.log(x);
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