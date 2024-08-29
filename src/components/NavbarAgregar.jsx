import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../img/logo.png';

function NavbarAgregar() {
  return (
    <Navbar className="navbar-agregar" bg="white" variant="light" expand="lg">
    <Container>
        <Container>
        <Navbar.Brand className="ml-auto">
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block align-top"
          style={{ height: '50px' }}
         />
             </Navbar.Brand>
        </Container>
    
      <Navbar.Brand className="mr-auto">
        <Link to="/inicio" className="btn btn-primary mr-2">Volver</Link>
      </Navbar.Brand>

      <Navbar.Brand className="mr-auto">
        <Link to="/home" className="btn btn-danger mr-2 " >Salir</Link>
      </Navbar.Brand>

      
    </Container>
  </Navbar>
  )
}

export default NavbarAgregar