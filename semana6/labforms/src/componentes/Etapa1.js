import React from "react";
import TituloPagina from "./componentes/tituloPagina"
import PerguntaEscrever from "./componentes/PerguntaEscrever"
import PerguntaEscolher from "./componentes/PerguntaEscolher"



class Etapa1 extends React.Component { 

render(){

  const tituloEtapa1 = "ETAPA 1: DADOS GERAIS"
  
  return(
    <div className="content">
      <TituloPagina titulo={tituloEtapa1}/>

      <PerguntaEscrever pergunta="1. Qual o seu nome?"/>
      <PerguntaEscrever pergunta="2. Qual a sua idade?"/>
      <PerguntaEscrever pergunta="3. Qual o seu e-mail?"/>

      <PerguntaEscolher escrita="4. Qual sua escolaridade" opcoes={["Ensino Médio Incompleto", "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"]}/>
    </div>
  )
}

}

export default Etapa1;
