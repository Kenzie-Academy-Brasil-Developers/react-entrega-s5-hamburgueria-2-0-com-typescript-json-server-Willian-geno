import {
  Conteiner,
  TitleConteiner,
  Form,
  ContinerDisc,
  IconConteiner,
  LogoConteiner,
  MenssagerError,
  RegisterConteiner,
} from "./styled";
import Input from "../../components/input";
import Button from "../../components/button";
import { useRequest } from "../../provider/request";
import { RiShoppingBag3Line } from "react-icons/ri";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface useFormProps {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

const SignUp = () => {
  const { registering } = useRequest();

  const shema = yup.object().shape({
    email: yup.string().required("Campo Obrigatorio").email("Email invalido"),
    name: yup.string().required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio"),
    passwordConfirmation: yup
      .string()
      .required("Campo Obrigatorio")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<useFormProps>({
    resolver: yupResolver(shema),
  });

  const handle = (data: useFormProps) => {
    const requi = {
      name:data.name,
      email:data.email,
      password:data.password,
    }
    registering(requi);
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

      <RegisterConteiner>
        <TitleConteiner>
          <p>Cadastro</p>
          <Link to="/">Retorne para o login</Link>
        </TitleConteiner>
        <Form onSubmit={handleSubmit(handle)}>
          <Input
            label="Email"
            placeholder="Degite seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />

          <MenssagerError>{errors.email?.message}</MenssagerError>

          <Input
            label="Nome"
            placeholder="Degite seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <MenssagerError>{errors.name?.message}</MenssagerError>
          <Input
            label="Senha"
            placeholder="Degite sua senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <MenssagerError>{errors.password?.message}</MenssagerError>
          <Input
            label="Confirmação de senha"
            placeholder="confirme seua senha"
            register={register}
            name="passwordConfirmation"
            error={errors.passwordConfirmation?.message}
          />
          <MenssagerError>
            {errors.passwordConfirmation?.message}
          </MenssagerError>

          <Button name="Cadastrar" color="#999999" backgroundColor="#f5f5f5" />
        </Form>
      </RegisterConteiner>
    </Conteiner>
  );
};

export default SignUp;
