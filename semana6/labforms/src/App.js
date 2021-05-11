import React from "react";
import "./logo.svg"
import Etapa1 from "./componentes/Etapa1"
import Etapa2 from "./componentes/Etapa2"
import Etapa3 from "./componentes/Etapa3"
import Final from "./componentes/Final"
import TituloPagina from "./componentes/tituloPagina";


class App extends React.Component { 
  state = {
    etapa: 1
  }
  
  renderizarPagina = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
      default:
        return <Final/>
    }
  }

  proximaPagina = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render(){    
    return (
      <div className="content">
        {this.renderizarPagina()}
        <br/>
        {this.state.etapa !== 4 && (
        <button onClick={this.proximaPagina}>Próxima página</button>
        )}
      </div>
    );
}

}

export default App;
