import React, { Component } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

class Home extends Component{

render() {
    return (
    //  <ToggleButton value={1}>Option 1</ToggleButton>
    <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>
    );
  }
}


export default Home;
