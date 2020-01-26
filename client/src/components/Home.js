import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import CameraService from './CameraService';
import Media from 'react-bootstrap/Media';



const styles = {
    mainImage: {
      padding: 0,
      marginRight: 0,
        height: 1356,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${"/images/banner2edit2.jpg"})`

    }
  };

const styleOther = {
  navbarInside: {
  background: 'white',
  position: 'fixed',
  zIndex: 500,

  marginLeft: 0,
  marginRight: 0,
  padding:0,
  left: 0,
  right: 0,
  }
};

const headerStyles = {
  fontStyles: {
    fontSize: '500%',
    paddingLeft: '10%',
    fontFamily: 'Beattingvile'
  }
};

const tabStyles = {
  styles : {
    paddingLeft: '50%'
  }
}

const firstrowStyles = {
  firstRow: {
    lineHeight : '65px'
    }

};

const cameraStyles = {
  camera: {
    paddingTop: '15%',
    position: 'center',

  }
};

const bodyStyles = {
  header1: {
    fontSize: '500%',
    fontFamily: 'Beattingvile',
    marginLeft: '16%',


  },
  header2: {
    fontSize: '500%',
    fontFamily: 'Beattingvile',
    marginLeft: '24%'
  }
};


class Home extends Component {
render() {
    return (
      <div className="Home" style={styles.mainImage}>
      <Container>
      <Row style = {firstrowStyles.firstRow}>
      <Nav className="mr-auto">
      <Navbar style={styleOther.navbarInside} >
      <Navbar.Brand href="#home" style = {headerStyles.fontStyles}>Green Eats </Navbar.Brand>
      <Image className = "justify-content-start" src="images/plantBetter.jpg" style= {{display:'inline-block', width: 60, height: 60}}/>

        <Nav className="justify-content-end" activeKey="/home" style = {tabStyles.styles}>
        <Nav.Item>
          <Nav.Link href="#home"> About Us </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#howitworks"> How It Works </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact"> Contact </Nav.Link>
        </Nav.Item>
        </Nav>
        </Navbar>
    </Nav>
    </Row>
    </Container>

    <div className = "Body" style = {cameraStyles.camera}>
    <Container>
    <h1 style= {bodyStyles.header1}> <span style= {{backgroundColor: '#FFFFFF'}}>  Check your food, </span></h1>
    <h1 style= {bodyStyles.header2}> <span style= {{backgroundColor: '#FFFFFF'}}>sustainable eating today </span> </h1>
    <CameraService></CameraService>
    </Container>
    </div>
      </div>

    );
  }
}


export default Home;
