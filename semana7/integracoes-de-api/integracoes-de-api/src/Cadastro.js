import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';



export default class Cadastro extends React.Component {
  render() {
    return (
      <div className="App">        
          <div>
            <label>
              Nome:
              <input
              value = {this.props.inputNome}
              onChange = {this.props.mudaInputNome}
              />
            </label>
          </div>
          <div>
            <label>
              E-Mail:
              <input
              value = {this.props.inputEmail}
              onChange = {this.props.mudaInputEmail}
              />
            </label>
          </div>
          <div>
            <button onClick={this.props.criaUsuario}>Salvar</button>
          </div>
      </div>
    );
  }
}