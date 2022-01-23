import { Conteiner, Burguer, Kenzie } from "./styled";

interface LogoProps{
    width:number;
};

const Logo = ({width}: LogoProps) => {
    return (
        <Conteiner>
            <Burguer width = {width}>Burguer</Burguer>
            <Kenzie width = {width}>Kenzie</Kenzie>
        </Conteiner>
    );
};

export default Logo;