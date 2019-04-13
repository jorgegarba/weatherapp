import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import {Container,Row,Col,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

const cities = [
  'Arequipa, PE',
  'Puno, PE',
  'Puerto Maldonado, PE',
  'Washington, US'];

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Row>
          <h1>Titulo</h1>
        </Row>
        <Row>
          <h5>API de cLimas y pronóstios</h5>
        </Row>
        <Row>
          <LocationList cities={cities}/>
        </Row>
      </Container>
      
      
    );
  }
}

export default App;
