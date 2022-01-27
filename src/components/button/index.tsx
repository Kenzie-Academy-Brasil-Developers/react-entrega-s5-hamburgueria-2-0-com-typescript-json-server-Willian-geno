import { ButtonHTMLAttributes } from "react";
import { Conteiner } from "./stylrd";
import { useRequest } from "../../provider/request";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  funcao?: (intem?:any) => void;
  color: string;
  backgroundColor: string;
}

const Button = ({
  name,
  funcao,
  color,
  backgroundColor,
  ...rest
}: ButtonProps) => {
  const { logof } = useRequest();
  return (
    <Conteiner
    type="submit"
    onClick={funcao}
    color={color}
    backgroundColor={backgroundColor} 
    >
      {name}
    </Conteiner>
  );
};

export default Button;
