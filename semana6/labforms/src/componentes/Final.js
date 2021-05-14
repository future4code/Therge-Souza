import React from "react";
import TituloPagina from "./tituloPagina";

class Final extends React.Component{
   
  render(){
  const tituloFinal = "O FORMULÁRIO ACABOU"
  return (
    <div className="content">
      <TituloPagina titulo={tituloFinal}/>
      <p>Muito obrigado por participar! Entraremos em contato!</p>
    </div>
  );
}
}

export default Final