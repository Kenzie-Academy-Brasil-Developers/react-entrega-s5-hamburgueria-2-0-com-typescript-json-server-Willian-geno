import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../../services";

interface ProductsProviderData {
  products:Product[];
  addProducts: () => void;
}

interface ProductsProps {
  children: ReactNode;
}

interface Product {
  name: string;
  category: string;
  price: number;
  img_url: string;
}

interface Products {
  list: Product[];
}

interface filterProductsProps {
  name:string;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  const addProducts = () => {
    api.get("menu").then((response) => {
        setProducts(newProducts)
        setProducts(response.data);
    });
  };

 /*  const filterProducts = (name :filterProductsProps) => {

    if (name){
      api.get("menu").then((response) => {
        setProducts(response.data);
      });
    }else{
      setNewProducts (products.filter((item) => (
        item.name.toUpperCase === name))
        )
        setProducts(newProducts)
      }

  } */

  return (
    <ProductsContext.Provider value={{ products, addProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
