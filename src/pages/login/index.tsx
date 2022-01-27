import {
  Conteiner,
  ContinerDisc,
  IconConteiner,
  RegisterConteiner,
  Form,
  LogoConteiner,
} from "./styled";
import { MenssagerError } from "../signUp/styled";
import Logo from "../../components/logo";
import { RiShoppingBag3Line } from "react-icons/ri";
import Input from "../../components/input";
import Button from "../../components/button";
import { useRequest } from "../../provider/request";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { error } from "console";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const shema = yup.object().shape({
    email: yup.string().required("Campo Obrigatorio").email("Email invalido"),
    password: yup.string().required("Campo Obrigatorio"),
  });

  const { login } = useRequest();
  const navegate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(shema),
  });

  const handle = (data: UserData) => {
    console.log(data)
    login(data);
  };

  const goToRegistration = () => {
    navegate("signup");
  };

  return (
    <Conteiner>
      <LogoConteiner>
        <Logo width={26} />
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

      <Form onSubmit={handleSubmit(handle)}>
        <label> Login </label>
        <Input
          label="Email"
          placeholder="Degite seu email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <MenssagerError>{errors.email?.message}</MenssagerError>
        <Input
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <MenssagerError>{errors.password?.message}</MenssagerError>
        <Button
          type="submit"
          name="Logar"
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
