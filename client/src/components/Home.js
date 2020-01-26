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
import Modal from 'react-bootstrap/Modal';
import {Bar, defaults} from 'react-chartjs-2';
//defaults.global.animation = true;
const styles = {
    mainImage: {
      padding: 0,
      marginRight: 0,
        height: "100vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${"/images/blurredbanner2.png"})`
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
    fontFamily: 'Mukta Mahee'
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
    paddingTop: '15vh',
    position: 'center',
    height: "60vh",
  }
};
const bodyStyles = {
  header1: {
    fontSize: '3em',
    fontFamily: 'Mukta Mahee',
    color:"white"
  },
  header2: {
    fontSize: '3em',
    fontFamily: 'Mukta Mahee',
    textAlign: "center",
    color:"white"
  }
};
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
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};
const showModal = false;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data: data, showModal: showModal, food:"none", avg: null};
    this.handler = this.handler.bind(this);
    this.close =  this.close.bind(this);
  }
  handler(array, food, avg) {
    this.setState({
      data: array,
      showModal: true,
      food:food,
      avg: avg
    })
  }
  close() {
    this.setState({
      showModal: false
    })
  }
render() {
    console.log(this.state.data)
    return (
      <div className="Home" style={styles.mainImage}>
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
    <div className = "Body" style = {cameraStyles.camera}>
    <h1 style= {bodyStyles.header2}> <span style= {{}}>Check your food, start sustainable eating today </span> </h1>
    <CameraService handler = {this.handler}>
    </CameraService>
      <Modal show={this.state.showModal} onHide={this.close} centered size='lg'> 
      <Modal.Header closeButton><Modal.Title><h1>We identified this as a {this.state.food}</h1></Modal.Title></Modal.Header>
      <Modal.Body style={{height:'50%'}}>
      <h3>The average sustainability score of the {this.state.food} is {this.state.avg}</h3>
      <Bar
          data={this.state.data}
          width={200}
          height={150}
          options={{
            maintainAspectRatio: true
          }}
        />
      </Modal.Body>
      </Modal>
    </div>
      </div>
    );
  }
}
export default Home;