import styled from "styled-components";

export const Conteiner = styled.div`
    border:1px solid var(--color-grey-100);
    background-color: white;
    width: 300px;
    height: 346px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0 30px 0 ;
    img{
        width: 177px;
    }
`;

export const ItemDiscription = styled.div`
    height: 45%;
    width: 90%;
    flex-direction: column;
       display: flex;
       justify-content: space-between;
       align-items: flex-start;
`;

export const Category = styled.div`
    font-weight: 100;
    font-size: 16px;
    color: var(--color-grey-300);
`;

export const Price = styled.div`
font-size: 16px;
    color: var(--color-green);
    font-weight: bold;`;

export const Name =styled.div`
    font-size: 16px;
    color: var(--color-grey-600);
    font-weight: bold;
`;

export const ButtonConteiner = styled.div`
    width:50%
`