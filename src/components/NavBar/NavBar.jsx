import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar as NavBarBs, Container, Nav } from 'react-bootstrap'

export const NavBar = memo(
  function NavBar() {
    return (
      <NavBarBs bg="dark" expand="lg" variant="dark">
        <Container>
          <NavBarBs.Brand>Main App</NavBarBs.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/profile'>Profile</Nav.Link>
            <Nav.Link as={NavLink} to='/lists'>Lists</Nav.Link>
          </Nav>
        </Container>
      </NavBarBs>
    );
  }
);
