import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const addProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <ProductContext.Provider value={{ productos, addProducto }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
