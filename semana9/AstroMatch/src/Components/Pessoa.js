import React from "react";
import styled from "styled-components";

const ImgContainer = styled.img`
  display: inline-block;
  width: 250px;
  height: 300px;
  background: lightpink;
  border-radius: 10px;
  position: relative;
`;

const InfoUser = styled.p`
  font-size: 24px;
  color: rgb(153, 50, 204);
`;

// const InfoContainer = styled.div`
//   width: 250px;
//   position: absolute;
//    text-align: center;
//   margin: 0 auto;
//   top: 240px;
//   right: 200px;
// `

const Pessoa = (props) => {
  return (
    <div>
      <ImgContainer src={props.imagem} />

      <InfoUser>{props.nome}</InfoUser>
      <InfoUser>{props.idade}</InfoUser>

      <p>{props.bio}</p>
    </div>
  );
};

export default Pessoa;
