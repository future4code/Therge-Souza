import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import styled from "styled-components";
import Titulo from "./Components/Titulo";
import Pessoa from "./Components/Pessoa";

const PrincipalContainer = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  background: lightgrey;
  width: 400px;
  height: 600px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
`;

export default function App(props) {
  const [users, setUsers] = useState({});
  const [aluno, setAluno] = useState("darvas");
  const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`;

  useEffect(() => {
    pegarUsers();
  }, [URL, setUsers]);

  const pegarUsers = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data.profile);
        setUsers(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PrincipalContainer>
      <Titulo />
      <Pessoa
        imagem={users.photo}
        nome={users.name}
        idade={users.age}
        bio={users.bio}
      />
    </PrincipalContainer>
  );
}
