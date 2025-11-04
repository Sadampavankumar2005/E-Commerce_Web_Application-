import { createContext, useContext, useState } from "react";
import productsData from "./ProductsData.js";


// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductsContext);