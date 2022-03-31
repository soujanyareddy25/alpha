import React from 'react';
import logo from './logo.svg';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { StyledLink } from './HeaderStyles'
function Header() {
  const Logo ='A L P H Ɑ';
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="xxl">
        <Container>
          <Navbar.Brand > <StyledLink className="LinkColor"  style={{ textDecoration: 'none' }} to='/'>{Logo}</StyledLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  ><StyledLink className="LinkColor"  to='/portals'>PORTALS</StyledLink></Nav.Link>
              <Nav.Link  ><StyledLink className="LinkColor"  to='/pages'>PAGES</StyledLink></Nav.Link>
              <Nav.Link  ><StyledLink className="LinkColor"  to='/components'>COMPONENTS</StyledLink></Nav.Link>
              <Nav.Link ><StyledLink className="LinkColor"  to='/usergroups'>USER GROUPS</StyledLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
