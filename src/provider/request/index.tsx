import axios from "axios";
import { useContext, createContext, ReactNode, useState } from "react";
import { api } from "../../services";
import {useNavigate} from "react-router-dom"

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
  registering: (data: RequestProvidersPropsRegister) => void;
  isLogadoFunction: () => void;
 
}

const RequestContext = createContext<RequestPoviderData>({} as RequestPoviderData);

export const RequestProvider = ({children} : RequestProps) => {

  const [isLogado, setIsLogado] = useState(false);
  const navegate = useNavigate();
  
  const login = (data: RequestProvidersPropsLogin) => {
    console.log(data)
    api.post("login",data)
    .then(response => {
      localStorage.setItem("@Hamburgueria::token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("@Hamburgueria::userId", JSON.stringify(response.data.user.id));
      navegate("/dashboard");
      setIsLogado(true)
    });
  };

  const logof = () => {
    localStorage.clear();
    setIsLogado(false)
    navegate("/");
  };

  const registering = (data: RequestProvidersPropsRegister) => {

    api.post("register", data)
    .then(response => {
      navegate("/")
    })
  };

  const isLogadoFunction = () =>{
    const token = localStorage.getItem("@Hamburgueria::token")
    console.log(token)
    if (!token){
      navegate("/")
    }
  }

  return (
    <RequestContext.Provider value={{ login, logof, registering,isLogadoFunction  }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);