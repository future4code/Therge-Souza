import React from "react";
import styled from "styled-components";
import Botao from "./Botao/Botao";

const PrincipalContainer = styled.div`
  margin: 0 auto;
  height: 60vh;
  width: 50vw;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Titulo = styled.h1`
  text-align: center;
`;

const ImgContainer = styled.img`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border: 2px black solid;
  border-radius: 30px;
`;

const BotaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const PaginaInicial = () => {
  return (
    <PrincipalContainer>
      <Titulo>Bem-vindos à Labe-X</Titulo>
      <ImgContainer src="https://i.pinimg.com/originals/49/15/30/4915302c96af032e78c085fa46c6d78e.jpg" />
      <BotaoContainer>
        <Botao nomeBotao="Lista de Viagens" />
        <Botao nomeBotao="Página de Admin" />
      </BotaoContainer>
    </PrincipalContainer>
  );
};

export default PaginaInicial;
