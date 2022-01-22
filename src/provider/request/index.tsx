import { useContext, createContext, ReactNode } from "react";

interface RequestProvidersPropsLogin {
  email: string;
  password: string;
}

interface RequestProvidersPropsRegister {
  email: string;
  password: string;
  name: string;
}

interface RequestProps {
  children: ReactNode;
}

interface RequestPoviderData {
  login: (data: RequestProvidersPropsLogin) => void;
  logof: () => void;
  register: (data: RequestProvidersPropsRegister) => void;
}

const RequestContext = createContext<RequestPoviderData>({} as RequestPoviderData);

export const RequestProvider = ({children} : RequestProps) => {
  const login = (data: RequestProvidersPropsLogin) => {
    console.log("logado", data);
  };

  const logof = () => {
    console.log("deslogado");
  };

  const register = (data: RequestProvidersPropsRegister) => {
    console.log("registrago", data);
  };

  return (
    <RequestContext.Provider value={{ login, logof, register }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);