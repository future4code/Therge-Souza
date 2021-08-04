import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MatchesContainer = styled.div`
  width: 200px;
  background: lightblue;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
`;

const ListaMatch = () => {
  const [lista, setLista] = useState([]);
  const [aluno, setAluno] = useState("daniel");
  const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`;

  let limpar = "";

  useEffect(() => {
    pegarMatches();
  }, [limpar]);

  const pegarMatches = () => {
    axios
      .get(URL)
      .then((res) => {
        setLista(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filtrarLista = lista.map((match) => {
    return (
      <div>
        <p key={match.id}>
          {match.name} - {match.age}
        </p>
      </div>
    );
  });

  return (
    <MatchesContainer>
      <h2>Lista de Matches</h2>
      {filtrarLista}
    </MatchesContainer>
  );
};

export default ListaMatch;
