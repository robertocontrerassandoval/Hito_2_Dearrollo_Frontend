import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import Login from './view/Login';
import Agregar from './view/Agregar';
import Inicio from './view/Inicio';


const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/agregar" element={<Agregar/>} />
        <Route path="*" element={<Home />} />
      
      </Routes>
   
    </>
    
  );
};

export default App;

