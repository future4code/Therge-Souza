import React from "react";
import TituloPagina from "./componentes/tituloPagina"
import PerguntaEscrever from "./componentes/PerguntaEscrever"
import PerguntaEscolher from "./componentes/PerguntaEscolher"



class Etapa1 extends React.Component { 

render(){
  const tituloEtapa1 = "ETAPA 1: DADOS GERAIS"
  
  return(
    <div>
      <TituloPagina titulo={tituloEtapa1}/>

      <PerguntaEscrever pergunta="Qual o seu nome?"/>
      <PerguntaEscrever pergunta="Qual a sua idade?"/>
      <PerguntaEscrever pergunta="Qual o seu e-mail?"/>

      <PerguntaEscolher escrita="Qual sua escolaridade" opcoes={["Ensino Médio Incompleto", "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"]}/>
    </div>
  )
}

}

export default Etapa1;
