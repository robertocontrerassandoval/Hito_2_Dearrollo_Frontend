import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../img/logo.png';

function NavbarInicioSesion() {
  return (
    <Navbar className="navbar-inicio-sesion" bg="white" variant="light" expand="lg">
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
          <Link to="/" className="btn btn-primary mr-2">Registrarme</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarInicioSesion