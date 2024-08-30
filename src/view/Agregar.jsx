import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarAgregar from '../components/NavbarAgregar';
import Producto from '../components/CrearProducto'; // Asegúrate de que este es el componente correcto
import { Col, Row, Form, Button } from 'react-bootstrap';

const Agregar = () => {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    titulo: '',
    imagen: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const [errors, setErrors] = useState({
    titulo: '',
    imagen: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // aqui validamos los datos del formulario
    let hasErrors = false;
    const newErrors = {
      titulo: '',
      imagen: '',
      descripcion: '',
      precio: '',
      stock: ''
    };

    if (!formData.titulo.trim()) {
      newErrors.titulo = 'El título es requerido.';
      hasErrors = true;
    }
    if (!formData.imagen.trim()) {
      newErrors.imagen = 'La imagen es requerida.';
      hasErrors = true;
    }
    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es requerida.';
      hasErrors = true;
    }
    if (!formData.precio || formData.precio <= 0) {
      newErrors.precio = 'El precio debe ser un número positivo.';
      hasErrors = true;
    }
    if (!formData.stock || formData.stock < 0) {
      newErrors.stock = 'El stock debe ser un número entero no negativo.';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Si no encuebtra errores se genera el nuevo producto
    setProductos([...productos, formData]);

    // se Limpia el formulario y los mensajes de error
    setFormData({
      titulo: '',
      imagen: '',
      descripcion: '',
      precio: '',
      stock: ''
    });
    setErrors({
      titulo: '',
      imagen: '',
      descripcion: '',
      precio: '',
      stock: ''
    });
  };

  return (
    <>
      <Container className="container-agregar d-flex flex-column ">
       
          <Container>
            <NavbarAgregar />
          </Container>
          <Container className=' container-form d-flex flex-columns' >

          <Container className='d-flex justify-content-center align-items-center'>
            <Container className="form-background d-flex flex-column justify-content-center align-items-center">
              <Row style={{ width: '80%' }}>
                <Col>
                <Form className='form-agregar w-100' onSubmit={handleSubmit}>
  <h2 className='text-center'>Crear nueva publicación</h2>
  
  <Form.Group className="mb-2" controlId="formBasicTitulo">
    <Form.Label>Titulo</Form.Label>
    <Form.Control
      type="text"
      name="titulo"
      value={formData.titulo}
      onChange={handleChange}
      placeholder="Ingrese titulo"
    />
    {errors.titulo && <Form.Text className="text-danger">{errors.titulo}</Form.Text>}
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicImagen">
    <Form.Label>Imagen</Form.Label>
    <Form.Control
      type="text"
      name="imagen"
      value={formData.imagen}
      onChange={handleChange}
      placeholder="Ingrese imagen"
    />
    {errors.imagen && <Form.Text className="text-danger">{errors.imagen}</Form.Text>}
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicDescripcion">
    <Form.Label>Descripción</Form.Label>
    <Form.Control
      type="text"
      name="descripcion"
      value={formData.descripcion}
      onChange={handleChange}
      placeholder="Ingresar descripción"
    />
    {errors.descripcion && <Form.Text className="text-danger">{errors.descripcion}</Form.Text>}
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPrecio">
    <Form.Label>Precio</Form.Label>
    <Form.Control
      type="number"
      name="precio"
      value={formData.precio}
      onChange={handleChange}
      placeholder="Ingresar precio"
    />
    {errors.precio && <Form.Text className="text-danger">{errors.precio}</Form.Text>}
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicStock">
    <Form.Label>Stock</Form.Label>
    <Form.Control
      type="number"
      name="stock"
      value={formData.stock}
      onChange={handleChange}
      placeholder="Ingresar stock"
    />
    {errors.stock && <Form.Text className="text-danger">{errors.stock}</Form.Text>}
  </Form.Group>

  <Container className='d-flex justify-content-center'>
    <Button variant="primary" type="submit">
      Agregar
    </Button>
  </Container>
</Form>

            </Col>
           </Row>
            </Container>
          </Container>
      
        <Container className="flex-column justify-content-center align-items-center">
          <Row>
            <Col className='text-center'>
              <h1 className='text-center'>Productos agregados</h1>
            </Col>
          </Row>
          <Producto productos={productos} />
        </Container>
        </Container>
      </Container>
    </>
  );
}

export default Agregar;
