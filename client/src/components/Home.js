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

  marginLeft: 0,
  marginRight: 0,
  padding:0,
  left: 0,
  right: 0,
}
};

const headerStyles = {
  fontStyles: {
    fontSize: '200%',
    paddingLeft: '10%'
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


class Home extends Component {
render() {
    return (
      <div className="Home" style={styles.mainImage}>
      <Container>
      <Row style = {firstrowStyles.firstRow}>
      <Nav className="mr-auto">
      <Navbar style={styleOther.navbarInside} >
      <Navbar.Brand href="#home" style = {headerStyles.fontStyles}>Green Eats </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home" style = {tabStyles.styles}>
        <Nav.Item>
          <Nav.Link href="#home">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#howitworks">How It Works</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
        </Nav>
        </Navbar>
    </Nav>
    </Row>

        {/*<Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>*/}
        {/*<h1> TEST PLS WORK </h1>*/}

      </Container>
      <Container>
        <CameraService></CameraService>
      </Container>


      </div>

    );
  }
}


export default Home;
