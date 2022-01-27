import { useState, createContext, ReactNode, useContext } from "react";
import { set } from "react-hook-form";
import Card from "../../components/card";

interface Product {
  name: string;
  category: string;
  price: number;
  img_url: string;
}

interface Total{
  total:number
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  removeAllItensCard:() =>void;
  removeItemCart: (item:Product) => void;
  addCart: (item:Product) => void;
  removeFromCart: (itemRemove:Product) => void;
}
const cartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {

  const [cart, setCart] = useState<Product[]>([]);

  const addCart = (item:Product) => {
    setCart([...cart, item]);
  };

  const removeItemCart = (item :Product) => {

    const newCart = cart.filter((itemRemuve)=>(
        item.name !== itemRemuve.name
    ));
    setCart(newCart);
  };

  const removeAllItensCard = () => {
      setCart([]);
  };

  
  const removeFromCart = (itemRemove:Product) => {
    const index = cart.indexOf(itemRemove)
    cart.splice(index,1)
  } 
  return (
    <cartContext.Provider value={{ cart, addCart,removeFromCart, removeItemCart, removeAllItensCard }}>{children}</cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
