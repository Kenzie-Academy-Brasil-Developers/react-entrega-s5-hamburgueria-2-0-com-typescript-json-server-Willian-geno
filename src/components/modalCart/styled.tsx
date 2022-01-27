import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Conteiner = styled.div`
    width: 500px;
    background-color: var(--color-grey-0);
`;
export const Header = styled.div`
    width: 90%;
    background-color: var(--color-green);
    height: 40px;
    border-radius: 0 0 10px 10px;
    padding: 3% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        color: var(--color-grey-0);
        font-size: 20px;
        font-weight: bold;
    }
    svg{
        font-size: 25px;
        color: var(--color-grey-0);
    }
`;
export const Bory = styled.div`
    max-height: 400px;
    min-height: 200px;
    overflow: auto;
`;

export const ItemConteiner = styled.div`
    display: flex;
    height: 90px;
    margin: 10px 0 30px 0;
    .discription{
        width: 100%;
        justify-content: space-around;
        display: flex;
        flex-direction: column;
    }

    img{
        width: 90px;
    }
`;
export const Name = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: var(--color-grey-600);
        font-size: 20px;
        font-weight: bold;
    }
    svg{
       font-size: 27px;
       color: var(--color-grey-300);
    }
`;

export const Quantity = styled.div`
    font-size: 23px;
    display: flex;

    svg{
        background-color: var(--color-green);
        border-radius: 5px;
        width: 25px;
        height: 23px;
        margin: 0 5px;
        color: var(--color-grey-0)
    }
`;

export const Total = styled.div`
    width: 90%;
    margin: 0 5% ;
    .division{
        width: 94%;
        margin: 3% 3%;
        height: 3px;
        background-color: var(--color-grey-100);
        text-align: center;
    }

    .priceTotal{
        display: flex;
        width: 94%;
        margin: 0 3%;
        justify-content: space-between;

        p{
            font-weight: 200;
            font-size: 18px;
        };
        h3{
            font-size: 18px;
            font-weight: bold;
            color: var(--color-grey-300);
        }
    }
`;
