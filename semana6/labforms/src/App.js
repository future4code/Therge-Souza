import React from "react";
import TituloPagina from "./componentes/tituloPagina"
import PerguntaEscrever from "./componentes/PerguntaEscrever"
import PerguntaEscolher from "./componentes/PerguntaEscolher"

class App extends React.Component {
 

render(){
  const tituloEtapa3 = "ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"
    return (
      <div>
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

export default App;
