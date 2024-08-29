import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../img/logo.png';

function NavbarInicio() {
  return (
    <Navbar className="navbar-inicio" bg="white" variant="light" expand="lg">
    <Container>

        <Container style={{ maxWidth: '200px', width: '100%' }}>
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
        <Nav.Link eventKey="inicio" t>Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" >
        <Nav.Link href="productos">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="favoritos">Favoritos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="perfil">Mi Perfil</Nav.Link>
      </Nav.Item>
    </Nav>
  

        </Container>


    
      <Navbar.Brand className="mr-auto">
        <Link to="/agragar" className="btn btn-primary mr-2">Agregar Productos</Link>
      </Navbar.Brand>

      <Navbar.Brand className="mr-auto">
        <Link to="/home" className="btn btn-danger mr-2 " >Salir</Link>
      </Navbar.Brand>

      
    </Container>
  </Navbar>
  )
}

export default NavbarInicio