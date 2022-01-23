import styled from "styled-components";

interface LogoStylesProps {
    width:number;
}

export const Conteiner = styled.div`
    display: flex;
    
`

export const Burguer = styled.div<LogoStylesProps>`
    font-size: ${(props) => props.width}px;
    font-weight: bold;
    color: var(--color-grey-600);
    margin: 0 4px 0 0;
`

export const Kenzie = styled.div<LogoStylesProps>`
    font-size: ${(props) => props.width -4}px;
    font-weight: bold;
    color: var(--color-red);
    position: relative;
    top:${(props) => props.width/2}px;
    margin: 0 0 0 4px;
`