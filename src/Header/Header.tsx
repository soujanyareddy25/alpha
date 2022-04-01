import React from 'react';
import logo from './logo.svg';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { StyledLink } from '../Utilities/Components/UtilitiesStyles';
import { BreadCrumbs } from '../Utilities/Components/index';
import { useLocation } from 'react-router-dom';
const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}
function Header() {
  const Logo ='A L P H Ɑ';
  const path = usePathname();
  const routeObj:any = {
    '/':'Home',
    '/portals':'PORTALS',
    '/pages':'PAGES',
    '/components':'COMPONENTS',
    '/usergroups':'USER GROUPS',
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
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
      <BreadCrumbs linkArray={[{'to':path,'name': routeObj[path]}]}/>
    </>
  );
}

export default Header;
