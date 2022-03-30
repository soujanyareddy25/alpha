import React from 'react';
import logo from './logo.svg';
import './Header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  const Logo ='A L P H Ɑ';
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="xxl">
        <Container>
          <Navbar.Brand href="#home">{Logo}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="LinkColor" href="#home">PORTALS</Nav.Link>
              <Nav.Link className="LinkColor" href="#link">PAGES</Nav.Link>
              <Nav.Link className="LinkColor" href="#home">COMPONENTS</Nav.Link>
              <Nav.Link className="LinkColor" href="#link">USER GROUPS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
