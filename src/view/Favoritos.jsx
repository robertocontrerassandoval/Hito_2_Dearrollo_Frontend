// Favoritos.jsx
import React, { useContext } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ProductoContext } from '../context/ProductoContext';

const Favoritos = () => {
  const { productos } = useContext(ProductoContext);

  return (
    <Container>
      <h1 className="my-4">Mis Favoritos</h1>
      <Row>
        {productos.map((producto, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={producto.imagen} alt={producto.titulo} />
              <Card.Body>
                <Card.Title>{producto.titulo}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text><strong>Precio:</strong> ${producto.precio}</Card.Text>
                <Card.Text><strong>Stock:</strong> {producto.stock}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favoritos;
