import { ReactNode } from "react";
import { RequestProvider } from "./request";

interface ProviderProps {
    children:ReactNode;
};

const Providers = ({children}: ProviderProps) => {
    return <>
        <RequestProvider>{children}</RequestProvider>
    </>
};

export default Providers;