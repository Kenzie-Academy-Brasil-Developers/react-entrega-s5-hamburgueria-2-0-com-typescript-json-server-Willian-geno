import { Conteiner,ConteinerInput, Label } from "./syled";

interface InputProps {
    label: string,
    placeholder: string
}

const Input = ({label, placeholder}:InputProps) => {

    return(
        <Conteiner>
            <Label>{label}</Label>
            <ConteinerInput>
                <input placeholder={placeholder}/>
            </ConteinerInput>
        </Conteiner>
    );
};

export default Input;