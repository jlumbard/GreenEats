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
  position: 'fixed',
  marginLeft: 0,
}
};

const headerStyles = {
  fontStyles: {
    fontSize: '200%'
}
};


class Home extends Component {
render() {
    return (
      <div className="Home" style={styles.mainImage}>
      <Container>
      <Nav className="ml-auto">
      <Navbar style={styleOther.navbarInside} >
      <Navbar.Brand href="#home" style = {headerStyles.fontStyles}>Green Eats </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
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


      </div>

    );
  }
}


export default Home;
