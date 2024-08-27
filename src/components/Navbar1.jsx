import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../img/logo.jpeg';

const CustomNavbar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg">
      <Container>
      <Navbar.Brand className="ml-auto">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: '50px' }}
          />
        </Navbar.Brand>
        <Navbar.Brand className="mr-auto">
          <Link to="/login" className="btn btn-primary mr-2">Inicio de sesión</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

