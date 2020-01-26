import React from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const styles = {
  video : {
    borderRadius: 50
  }
};
class CameraService extends React.Component{
   handleTakePhoto (dataUri, handler) {
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
        //window.alert("This food has an average of "+ avg);

        localStorage.setItem('LandUse', x.LandUse);
        localStorage.setItem('GHG', x.GHG);
        localStorage.setItem('Acid', x.Acid);
        localStorage.setItem('Eutrophying', x.Eutrophying);
        localStorage.setItem('Freshwater', x.Freshwater);
        localStorage.setItem('StressWeightedWater', x.StressWeightedWater);
        

        const data = {
          labels: ['Land Use', 'GHG Emissions', 'Acid Emissions', 'Eutrophying Emissions', 'Freshwater Withdrawls', 'Stress-Weighted Water Use'],
          datasets: [
            {
              label: '% Relative to Global Average',
              backgroundColor: 'rgba(202, 94, 72, 0.6)',
              borderColor: 'rgba(202, 94, 72, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(29, 56, 210, 0.6)',
              hoverBorderColor: 'rgba(29, 56, 210, 1)',
              data: [x.LandUse/26, x.GHG/9, x.Acid/47, x.Eutrophying/47, x.Freshwater/930, x.StressWeightedWater/36474]
            }
          ]
        };


        handler(data, x.food, avg);

        //make sure you clear these when you head back to the screen. 
      }
        );
    }
    )

  }

  render(){
    return(
      <div style={styles.video}>
  <Camera style={{borderRadius:"50px"}}
      onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri, this.props.handler); } }
      imageType = {IMAGE_TYPES.JPG}
    />
    </div>
    );
  }
    


}

export default CameraService;