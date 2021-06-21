import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './Navbars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faExpandArrowsAlt, faHome, faInbox } from '@fortawesome/free-solid-svg-icons'

const Navbars = () => {
    return (
      <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="white">
        <Navbar.Brand href="/" className="mx-5"> <h2><span className="text-secondary">D</span><span className="text-danger">S</span><span className="text-warning">I</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-5 px-5 py-3">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#technology">Technology</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#about/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#about/3.2">About company</NavDropdown.Item>
              <NavDropdown.Item href="#about/3.2">Another information</NavDropdown.Item>
              <NavDropdown.Item href="#about/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Client" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#client/3.1">Client</NavDropdown.Item>
              <NavDropdown.Item href="#client/3.2">Client service</NavDropdown.Item>
              <NavDropdown.Item href="#client/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#client/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#partner">Partner</Nav.Link>
          </Nav>
          <FontAwesomeIcon className="mx-3" icon={faHome}/>
          <FontAwesomeIcon className="mx-3" icon={faEnvelope}/>
          <FontAwesomeIcon className="mx-3" icon={faExpandArrowsAlt}/>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      </div>
      
    );
};

export default Navbars;