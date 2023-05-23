// ProductContext.js
import React, { createContext, useState } from "react";
import axios from "axios";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to insert a product into the database
  const insertProduct = async (productData) => {
    try {
      const response = await axios.post("/api/addproduct", {
        product: productData,
      });
      const insertedProduct = response.data;
      setProducts((prevProducts) => [...prevProducts, insertedProduct]);
    } catch (error) {
      console.error("Error inserting product:", error);
    }
  };

  // Provide the context value to children components
  const contextValue = {
    products,
    insertProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
