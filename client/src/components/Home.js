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
  width: 'cover'
}
};


class Home extends Component {
render() {
    return (
      <div className="Home" style={styles.mainImage}>
      <Container>
      <Navbar style={styleOther.navbarInside}>
      <Navbar.Brand href="#home" >Green Eats</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#home" >About Us</Nav.Link>
      <Nav.Link href="#howitworks">How It Works</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>

    </Nav>
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>

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
