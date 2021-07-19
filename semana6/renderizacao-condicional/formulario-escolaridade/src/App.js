import React, { Component } from 'react';
import './App.css';

import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends Component {
  state = {
    etapa: 1,
    escolaridade: ""
  }

  renderizaEtapa = () => {
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

  proximaEtapa = () => {
    let acrescentaEtapa = this.state.etapa + 1
    this.setState({ etapa: acrescentaEtapa})
  }

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        
        {this.state.etapa >= 4 ? <div></div> : <button onClick={this.proximaEtapa}>Proxima Etapa</button>}
      </div>
    );
  }
}

export default App;
