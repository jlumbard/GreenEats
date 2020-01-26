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
import {Bar} from 'react-chartjs-2';



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
 paddingTop: '2%',
 paddingBottom: '2%',
  left: 0,
  right: 0,
  }
};

const headerStyles = {
  fontStyles: {
    fontSize: '500%',
    paddingLeft: '10%',
    fontFamily: 'Beattingvile'
  },
  logoStyles:{
    paddingLeft: '2%',
    width: '15%',
    height: '15%'


  }
};

const tabStyles = {
  styles : {
    width: '65%',

  }
};

const firstrowStyles = {
  firstRow: {
    lineHeight : '50%',
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

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


class Home extends Component {
render() {
    return (
      <div className="Home" style={styles.mainImage}>
        
      <Container>
      <Row style = {firstrowStyles.firstRow}>
      <Nav className="mr-auto">
      <Navbar style={styleOther.navbarInside} >
      <Navbar.Brand href="#home" style = {headerStyles.fontStyles}>Green Eats
      <Image className = "justify-content-start" src="images/logoEvenBetter.jpg" style = {headerStyles.logoStyles}/>
      </Navbar.Brand>

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
    <h1 style= {bodyStyles.header2}> <span style= {{backgroundColor: '#FFFFFF'}}>start sustainable eating today </span> </h1>
    <CameraService>

    </CameraService>
    </Container>

      <Container style={{backgroundColor:"white"}}>
      <Bar
          data={data}
          width={100}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />



      </Container>



    </div>
      </div>

    );
  }
}


export default Home;
