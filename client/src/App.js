import React, { Component } from 'react';
import CameraHook from './hooks/CameraHook';

class App extends Component {
render() { 
    return (
      <div className="App">
        <CameraHook />
      </div>
    );
  }
}

export default App;

