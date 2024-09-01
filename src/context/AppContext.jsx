// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  // Función para agregar un producto
  const addProducto = (producto) => {
    setProductos((prevProductos) => [...prevProductos, producto]);
  };

  // Función para registrar un usuario
  const registerUser = (userData) => {
    setUser(userData);
  };

  // Función para agregar un producto a favoritos
  const addFavorito = (producto) => {
    if (!favoritos.some((fav) => fav.id === producto.id)) {
      setFavoritos((prevFavoritos) => [...prevFavoritos, producto]);
    }
  };

  // Función para eliminar un producto de favoritos
  const removeFavorito = (productId) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((fav) => fav.id !== productId)
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        productos,
        favoritos,
        addProducto,
        registerUser,
        addFavorito,
        removeFavorito,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useAppContext = () => {
  return useContext(AppContext);
};
