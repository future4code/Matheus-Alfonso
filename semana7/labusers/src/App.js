import React from 'react';
import Cadastrar from './components/Cadastrar';
import ListaUsuarios from './components/ListaUsuarios';

export default class App extends React.Component {
  state = {
    pagina: "cadastrar"
  }

  renderTela = () => {
    switch(this.state.pagina){
      case "cadastrar" : 
        return <Cadastrar renderLista={this.renderLista}/>
      case "lista" :
        return <ListaUsuarios renderCadastrar={this.renderCadastrar}/>
      default :
        return <Cadastrar/>
    }
  }

  renderCadastrar = () => {
    this.setState({pagina:"cadastrar"})
  }

  renderLista = () => {
    this.setState({pagina:"lista"})
  }


  
  render() {
    return (
      <div>
          {this.renderTela()}
      </div>
    );
  }
}
