import React from 'react'
import Container from 'react-bootstrap/Container';
import { Col, Row ,Form, Button}  from 'react-bootstrap'
import NavbarAgregar from '../components/NavbarAgregar'

function Agregar() {
  return (
    <>
 <Container>
     
     <Container className="container-agregar d-flex flex-column justify-content-space-around">
     <Container >
          <NavbarAgregar/>
          </Container>
          <Container className=' d-flex justify-content-center align-items-center' >



<Container className="form-background d-flex flex-column justify-content-center align-items-center">
  <Row style={{ width: '80%' }}>
    <Col >
    
    <Form className='form-agregar w-100'>
    <h2 className='text-center'>Crear nueva publicación</h2>
      <Form.Group className="mb-2" controlId="formBasicTitulo">
       <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese titulo" />
         <Form.Text className="text-muted">
         </Form.Text>
      </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicImagen">
    <Form.Label>Imagen</Form.Label>
    <Form.Control type="text" placeholder="Ingrese imagen" />
      <Form.Text className="text-muted">
      </Form.Text>
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicDecripcion">
    <Form.Label>Descripcíon</Form.Label>
    <Form.Control type="text" placeholder="Ingresar descripcion" />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPrecio">
    <Form.Label>Precio</Form.Label>
    <Form.Control type="number" placeholder="Ingresar precio" />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicStock">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="number" placeholder="Ingresar stock" />
  </Form.Group>
<Container className='d-flex justify-content-center'>
<Button  variant="primary" type="submit">
    Agregar
  </Button>

</Container>
 

</Form>
    </Col>
     </Row>
</Container>

<Container className=" flex-column justify-content-center align-items-center"  >
  <Row>
    <Col className='text-center'>
     <h1 className='text-center'>Productos agregados</h1>
    
    
    </Col>
   </Row>        
</Container>
</Container>



          </Container>    
            </Container>
       





   </>
  )
}

export default Agregar