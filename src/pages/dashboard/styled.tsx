import styled from "styled-components";

interface InputSerchProps {
  isOpemSearch: boolean;
}

export const Conteiner = styled.div``;
export const Harder = styled.div`
  height: 55px;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  @media screen and (min-width:900px){
    padding: 0 35px;
  }
`;
export const IconsConteiner = styled.div`
  font-size: 22px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  color: var(--color-grey-300);
  max-width: 120px;

  @media screen and (min-width: 900px){
    
  }
`;

// Input de pesquisa

export const InputSerch = styled.div<InputSerchProps>`
  display: ${(props) => (props.isOpemSearch ? "flex" : "none")};
  border: solid 1px var(--color-grey-600);
  border-radius: 5px;
  height: 40px;
  align-items: center;
  padding: 0 2px;
  justify-content: space-between;
  position: fixed;
  background-color: var(--color-grey-0);
  z-index: 1;
  width: 95%;
  top: 10px;
  left: 1.5%;

  @media screen and (min-width:900px){
    display: flex;

    width: 350px;
    left: 52%;
    padding: 0 0.3%;
    top: 8px;
  }

  input {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    width: 80%;
    font-size: 17px;
  }

  svg {
    border-radius: 5px;
    background-color: var(--color-green);
    padding: 10px;
    color: var(--color-grey-0);

    @media screen and (min-width: 900px){

    }
  }
`;
