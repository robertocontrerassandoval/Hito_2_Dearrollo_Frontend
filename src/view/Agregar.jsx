
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarInicio from '../components/NavbarInicio';

const CrearProductoForm = () => {
  const { addProducto } = useAppContext();
  const [producto, setProducto] = useState({
    id: '',
    imagen: '',
    titulo: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProducto({
      ...producto,
      id: Date.now() // Genera un ID único
    });
    // Reinicia el formulario
    setProducto({
      id: '',
      imagen: '',
      titulo: '',
      descripcion: '',
      precio: '',
      stock: ''
    });
  };

  return (
    <>
    
    <NavbarInicio />
    <Container className="d-flex flex-column align-items-center">
      <h2>Crear Nuevo Producto</h2>
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group controlId="formBasicTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título del producto"
            name="titulo"
            value={producto.titulo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripción del producto"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL de la imagen del producto"
            name="imagen"
            value={producto.imagen}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el precio del producto"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el stock del producto"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Agregar Producto
        </Button>
      </Form>
    </Container>
    </>
   
  );
};

export default CrearProductoForm;

