import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../img/logo.png';

function NavbarInicio() {
  return (
    <Navbar className="navbar-inicio" bg="white" variant="light" expand="lg">
    <Container>

        <Container style={{ maxWidth: '150px', width: '100%' }}>
        <Navbar.Brand className="ml-auto">
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block align-top"
          style={{ height: '50px' }}
         />
             </Navbar.Brand>
        </Container>
         
    
        <Container>
      <Nav defaultActiveKey="/inicio" as="ul">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/perfil">Mi Perfil</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>


    
      <Navbar.Brand className="mr-auto">
        <Link to="/agregar" className="btn btn-primary mr-2">Agregar Productos</Link>
      </Navbar.Brand>

      <Navbar.Brand className="mr-auto">
        <Link to="/home" className="btn btn-danger mr-2 " >Salir</Link>
      </Navbar.Brand>

      
    </Container>
  </Navbar>
  )
}

export default NavbarInicio