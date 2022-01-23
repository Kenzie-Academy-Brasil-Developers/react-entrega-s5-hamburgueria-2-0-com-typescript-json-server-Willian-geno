import styled from "styled-components";

export const Conteiner = styled.div`
  padding: 30px 5% 0 5%;

  @media screen and (min-width: 900px) {
    width: 100%;
    height: 100vh;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-grey-600);
  }
  a {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-grey-300);
  }
`;

export const Form = styled.div`
  margin: 40px 0 0 0;
`;

export const MenssagerError = styled.div`
  width: 100%;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 0 0 0 5px;
  color: var(--color-negative);
`;

export const RegisterConteiner = styled.div`
  padding: 30px 10px 30px 10px;
  border: 1px solid var(--color-grey-100);
  border-radius: 10px;
  background-color: var(--color-gray-100);
  max-width: 400px;

  @media screen and (min-width: 900px) {
    margin: 0 0 0 20px;
    width:400px;
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
  @media screen and (min-width: 900px) {
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

export const LogoConteiner = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    height: 60%;
    margin: 0 20px 0 0px;
    display: initial;
    max-width: 400px;
  }
`;
