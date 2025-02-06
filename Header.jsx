import React from 'react';
import './css/Header.css'
import {Container, Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" className='Navbaar'>
        <Container>
          <Navbar.Brand href="#home">ARSHAA</Navbar.Brand>
          <Nav className="ms-auto" id='nav-items'>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    </>
  );
}

export default Header;