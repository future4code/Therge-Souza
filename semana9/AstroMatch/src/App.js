import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import styled from "styled-components";

const PrincipalContainer = styled.div`
  margin: 0 auto;
  /* border: 1px solid red; */
  background: lightgrey;
  width: 400px;
  padding: 10px;
  text-align: center;
`;

const ImgContainer = styled.img`
  width: 250px;
  height: 300px;
  background: white;
`;

const InfoUser = styled.p`
  font-size: 24px;
  color: rgb(153, 50, 204);
`;

const AstroMatch = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const AstroColor = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  color: rgb(0, 255, 255);
`;

const MatchColor = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  color: rgb(153, 50, 204);
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
      <AstroMatch>
        <AstroColor>Astro</AstroColor>
        <MatchColor>Match</MatchColor>
      </AstroMatch>

      <ImgContainer src={users.photo} />

      <InfoUser>{users.name}</InfoUser>
      <InfoUser>{users.age}</InfoUser>

      <p>{users.bio}</p>
    </PrincipalContainer>
  );
}
