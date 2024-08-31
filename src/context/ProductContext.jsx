import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para productos y favoritos
const ProductContext = createContext();
const UserContext = createContext();

// Proveedor del contexto
const AppProvider = ({ children }) => {
  // Estado y funciones para productos y favoritos
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const addProducto = (producto) => {
    setProductos((prevProductos) => [...prevProductos, producto]);
  };

  const addFavorito = (producto) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, producto]);
  };

  const removeFavorito = (productoId) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter(p => p.id !== productoId));
  };

  // Estado y funciones para el usuario
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    password: '',
    fechaNacimiento: ''
  });

  const registerUser = (user) => {
    setUserData(user);
  };

  return (
    <ProductContext.Provider value={{ productos, addProducto, favoritos, addFavorito, removeFavorito }}>
      <UserContext.Provider value={{ userData, registerUser }}>
        {children}
      </UserContext.Provider>
    </ProductContext.Provider>
  );
};

// Hooks personalizados para usar los contextos
export const useProducts = () => {
  return useContext(ProductContext);
};

export const useUser = () => {
  return useContext(UserContext);
};

export default AppProvider;
