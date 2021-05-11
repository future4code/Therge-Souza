import React from "react";
import TituloPagina from "./tituloPagina";
import PerguntaEscrever from "./PerguntaEscrever";
import PerguntaEscolher from "./PerguntaEscolher";

class Etapa3 extends React.Component {
  render(){
    const tituloEtapa3 = "ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"
      return (
        <div className="content">
          <TituloPagina titulo={tituloEtapa3}/>
          <PerguntaEscrever
            pergunta={"5. Por que você não terminou um curso de graduação?"}
          />
          <PerguntaEscolher
            pergunta={"6. Você fez algum curso complementar?"}
            opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
          />
        </div>
      );
  }
}

export default Etapa3;
