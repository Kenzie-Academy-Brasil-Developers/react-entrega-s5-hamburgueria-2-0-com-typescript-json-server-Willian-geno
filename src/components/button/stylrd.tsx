import styled from "styled-components";

interface colors {
    color: string;
    backgroundColor:string;
}

export const Conteiner = styled.button<colors>`

    width: 100%;
    margin: 5% 0;
    border-radius: 10px;
    height: 45px;
    border: 0; 
    font-weight: bolder;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    font-size: 18px;
    
    
`