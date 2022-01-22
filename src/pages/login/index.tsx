import {
  Conteiner,
  ContinerDisc,
  IconConteiner,
  RegisterConteiner,
  Form,
  LogoConteiner
} from "./styled";
import Logo from "../../components/logo";
import { RiShoppingBag3Line } from "react-icons/ri";
import Input from "../../components/input";
import Button from "../../components/button";
import { useRequest } from "../../provider/request";

const Login = () => {
  const { login, register } = useRequest();

  const loging = () => {
    login({ email: "asd", password: "qwe" });
  };

  const goToRegistration = () => {
    console.log("foi para cadrastro");
  };

  return (
    <Conteiner>
      <LogoConteiner>
        <Logo />
        <ContinerDisc>
          <IconConteiner>
            <RiShoppingBag3Line />
          </IconConteiner>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os
            <strong> melhores </strong>
            ingredientes.
          </p>
        </ContinerDisc>
      </LogoConteiner>

      <Form>
        <label> Login </label>
        <Input label="Email" placeholder="Degite seu email" />
        <Input label="Senha" placeholder="Digite sua senha" />
        <Button
          name="Logar"
          funcao={loging}
          color="#f5f5f5"
          backgroundColor="#24ae60"
        ></Button>
        <RegisterConteiner>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome! </p>
          <Button
            name="Cadastrar"
            funcao={goToRegistration}
            color="#999999"
            backgroundColor="#f5f5f5"
          />
        </RegisterConteiner>
      </Form>
    </Conteiner>
  );
};

export default Login;
