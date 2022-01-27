import { FieldError, UseFormRegister } from "react-hook-form";
import { Conteiner, ConteinerInput, Label } from "./syled";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string | null;
}

const Input = ({
  label,
  placeholder,
  register,
  error = null,
  name,
  ...rest
}: InputProps) => {
    
  return (
    <Conteiner err = {error}>
      <Label err = {error} >{label}</Label>
      <ConteinerInput >
        <input placeholder={placeholder} {...register(name)} {...rest}/>
      </ConteinerInput>
    </Conteiner>
  );
};

export default Input;
