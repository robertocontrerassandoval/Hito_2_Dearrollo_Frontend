
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarInicio from '../components/NavbarInicio';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppContext } from '../context/AppContext';

const Perfil = () => {
  const { user, logoutUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Evita el renderizado mientras se redirige
  }

  return (
    <>
      <Container className="container-inicio d-flex flex-column justify-content-space-around">
        <Container className='container-navbar-inicio'>
          <NavbarInicio />
        </Container>

        <Container>
          <h1 className="text-center">Perfil de Usuario</h1>
          <div>
            <h2>{user.nombre}</h2>
            <p>Email: {user.email}</p>
            <Button variant="danger" onClick={logoutUser}>Cerrar Sesión</Button>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Perfil;

