import React from "react";
import styled from "styled-components";

const AstroMatch = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const AstroColor = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  color: rgb(0 197 205);
`;

const MatchColor = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  color: rgb(153, 50, 204);
`;

const Titulo = () => {
  return (
    <AstroMatch>
      <AstroColor>Astro</AstroColor>
      <MatchColor>Match</MatchColor>
    </AstroMatch>
  );
};

export default Titulo;
