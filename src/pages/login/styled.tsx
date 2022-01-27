import styled from "styled-components";

export const Conteiner = styled.div`
  padding: 30px 5% 0 5%;

  @media screen and (min-width: 900px){
    height: 100vh;
    padding: 0 10%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    }
`;
export const ContinerDisc = styled.div`
  margin: 30px 0;
  border: 1px solid var(--color-grey-100);
  border-radius: 10px;
  background-color: var(--color-gray-100);
  padding: 10px;
  display: flex;
  align-items: center;
  p {
    font-size: 12px;
    color: var(--color-grey-300);
    line-height: 1.6em;
    strong {
      color: var(--color-grey-600);
    }
  }
  @media screen and (min-width: 900px){
  }
`;
export const IconConteiner = styled.div`
  font-size: 23px;
  width: 80px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaf7f0;
  color: var(--color-green);
  margin: 0 20px 0 0;
`;
export const RegisterConteiner = styled.div`
 p {
    font-size: 12px;
    color: var(--color-grey-300);
    line-height: 1.6em;
    text-align: center;
    padding: 0 50px ;
    }
`;

export const Form = styled.form`
  border: 1px solid var(--color-grey-100);
  border-radius: 10px;
  background-color: var(--color-gray-100);
  padding: 30px 10px 0 10px ;
  max-width: 400px;
  
  
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--color-grey-600);
  }
  @media screen and (min-width: 900px){
    margin: 0 20px 0 0;
  }
`;

export const LogoConteiner = styled.div`
  @media screen and (min-width:900px){
    height:50% ;
    margin: 0 0 0 20px;
    max-width: 400px;
  }
`