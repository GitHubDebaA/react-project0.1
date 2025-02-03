import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../logo.svg";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky='top' collapseOnSelect expanded={expanded}>
      <Container>
        <Navbar.Brand className="d-flex align-items-center" as={NavLink} to="/" onClick={handleClose}>
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top me-2" />
          <h3 className="project-waving-text">Project 1</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={handleClose}>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;