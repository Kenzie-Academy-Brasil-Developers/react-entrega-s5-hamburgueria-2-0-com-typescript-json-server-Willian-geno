import { ReactNode } from "react";
import { RequestProvider } from "./request";
import { IsOpemProvider } from "./isOpem";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <IsOpemProvider>
        <RequestProvider>{children}</RequestProvider>
      </IsOpemProvider>
    </>
  );
};

export default Providers;
