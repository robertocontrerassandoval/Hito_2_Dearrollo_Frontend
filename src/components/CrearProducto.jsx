import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

const Producto = ({ productos }) => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        {productos.map((producto, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.titulo}</Card.Title>
                <Card.Text>
                  {producto.descripcion}
                </Card.Text>
                <Card.Text>
                  Precio: ${producto.precio}
                </Card.Text>
                <Card.Text>
                  Stock: {producto.stock}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Producto;
