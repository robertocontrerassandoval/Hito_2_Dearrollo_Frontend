import React from 'react'
import Container from 'react-bootstrap/Container';
import { Col, Row ,Form, Button}  from 'react-bootstrap'
import NavbarInicioSesion from '../components/NavbarInicioSesion';

function Login() {
  return (
    <Container>
     
 <Container className="container-login d-flex flex-column justify-content-space-around">
 <Container >
      <NavbarInicioSesion/>
      </Container>
        <Row className="justify-content-center w-100">
          <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
            <div className="form-container-login d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-center mb-4">Iniciar sesión</h2>
              <Form className="form-login justify-content-center ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese correo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresar contraseña" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit">
                    Ingresar
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>    
        </Container>
   
  )
}

export default Login