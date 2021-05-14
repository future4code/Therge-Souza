import React from "react";
import TituloPagina from "./componentes/tituloPagina"
import PerguntaEscrever from "./componentes/PerguntaEscrever"
import PerguntaEscolher from "./componentes/PerguntaEscolher"

class Etapa2 extends React.Component {

  
  render() {
    const tituloEtapa2 = "ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR"
    return (
      <div className="content">
      <TituloPagina titulo={tituloEtapa2}/>

      <PerguntaEscrever pergunta="1. Qual o curso?"/>
      <PerguntaEscrever pergunta="2. Qual a unidade de ensino?"/>
    </div>
    );
  }
}

export default Etapa2;
