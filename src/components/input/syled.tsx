import styled from "styled-components";

export const Conteiner = styled.div`
    margin: 15px 0 0 0; 
    border:2px solid;
    border-color: var(--color-grey-600);
    border-radius: 5px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ConteinerInput = styled.div`
    
    input{
        font-size: 15px;
        position: relative;
        top: -7px;
        left: 10px;
        width: 90%;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;

        ::placeholder{
            color:var(--color-grey-600);
            font-size: 15px;
        }
    }
`

export const Label = styled.div`
    width: fit-content;
    position: relative;
    top: -14.5px;
    left: 11px; 
    background-color: white;
    padding: 0 6px 0 6px ;
    font-size: 12px;
    color: var(--color-grey-300);
`