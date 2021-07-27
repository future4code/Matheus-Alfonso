import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import Cadastro from './Cadastro';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  
const headers = {
  headers: {
    Authorization : "matheus-alfonso-lovelace"
  }
}

export default class App extends React.Component {
  state = {
    usuarios: [{name: "hewuahea"}],
    inputNome: "",
    inputEmail: ""
  }

  changeInputNome = (e) => {
    this.setState({inputNome: e.target.value})
  } 

  changeInputEmail = (e) => {
    this.setState({inputEmail: e.target.value})
  }
  
  criarUsuario = () => {
    const body = {
      name : this.state.inputNome,
      email : this.state.inputEmail
    }

    axios
      .post(url, body, headers).then((red) => {
        alert("Usuário cadastrado com sucesso!")
        this.setState({inputNome:""})
        this.setState({inputEmail:""})
      })
      .catch((err) => {
        alert(err)
      })
  }

  showUsuarios = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({usuarios: res})
        console.log(res)
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  render() {
    const users = this.state.usuarios.map((u) => {
      return <p>{u.name}</p>
    })

    return (
        <div className="App">
          <Cadastro 
            mudaInputNome={this.changeInputNome}
            mudaInputEmail={this.changeInputEmail} 
            inputNome={this.state.inputNome} 
            inputEmail={this.inputEmail}
            criaUsuario={this.criarUsuario}
          />
          <ListaUsuarios
            usuariosCadastrados={this.state.usuarios}
            listaUsuarios={this.showUsuarios}
            listaPronta={this.users}
          />
        </div>
    );
  }
}

