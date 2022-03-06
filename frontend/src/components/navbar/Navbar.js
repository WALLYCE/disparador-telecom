import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
function MainNav(){

    return (
        <div>
   <Navbar bg="light" variant="light">
    <Container fluid>
    <Navbar.Brand href="#home" >
    <img
          alt=""
          src="imagens/whats-logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
    </Navbar.Brand>
    
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
export default MainNav;