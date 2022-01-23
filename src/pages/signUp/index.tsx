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

const SignUp = () => {
  const { register } = useRequest();

  const registering = () => {
    register({
      email: "dasdasd",
      name: "willian",
      password: "123456",
    });
  };

  return (
    <Conteiner>
      <LogoConteiner>
        <Logo width={26}/>
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
        <Form>
          <Input placeholder="Digite seu nome" label="Nome" />
          <MenssagerError>Nome Obrigatorio</MenssagerError>
          <Input placeholder="Digite seu Email" label="Email" />
          <MenssagerError></MenssagerError>
          <Input placeholder="Digite sua senha" label="Senha" />
          <MenssagerError></MenssagerError>
          <Input
            placeholder="Confirme sua senha"
            label="Confirmação da Senha"
          />
          <MenssagerError></MenssagerError>

          <Button
            name="Cadastrar"
            funcao={registering}
            color="#999999"
            backgroundColor="#f5f5f5"
          />
        </Form>
      </RegisterConteiner>
    </Conteiner>
  );
};

export default SignUp;
