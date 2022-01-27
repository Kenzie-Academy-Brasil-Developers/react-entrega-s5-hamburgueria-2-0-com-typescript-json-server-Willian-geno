import { ReactNode } from "react";
import { RequestProvider } from "./request";
import { IsOpemProvider } from "./isOpem";
import { CartProvider } from "./cart";
import {ProductsProvider} from "./products"

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
    <ProductsProvider>
      <CartProvider>
        <IsOpemProvider>
          <RequestProvider>{children}</RequestProvider>
        </IsOpemProvider>
      </CartProvider>
    </ProductsProvider>
    </>
  );
};

export default Providers;
