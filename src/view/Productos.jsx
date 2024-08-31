import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarInicio from '../components/NavbarInicio';
import { Container,Row, Col, Form, Button} from 'react-bootstrap'


const Productos =() => {
  

  return (
    
   <>
   <Container className="container-inicio d-flex flex-column justify-content-space-around">
     
     
     <Container className='container-navbar-inicio'>
          <NavbarInicio/>
      </Container>

      

          <Container >
           pagina productos
          </Container>   

            </Container>
       
   </>
  );
}

export default Productos