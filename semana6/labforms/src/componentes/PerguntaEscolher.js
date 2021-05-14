import React from "react";

class PerguntaEscolher extends React.Component {
  render(){
  return (
    <div>
      <p>{this.props.escrita}</p>
      <select>
        {this.props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </select>
    </div>
  );
}
}

export default PerguntaEscolher