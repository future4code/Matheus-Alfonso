import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ContainerCadastro = styled.div ` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const ContainerForm = styled.div ` 
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    padding: 20px;
    border-radius: 8px;
`


export default class Cadastrar extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    controlInputNome = (event) => {
        this.setState({nome: event.target.value})
    }

    controlInputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    cadastrarUsuario = () => {
        const body = {name:this.state.nome, email:this.state.email}
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
            .post(url, body, {
                headers: {
                    Authorization: "matheus-alfonso-labenu"
                }
            })
            .then((response) =>{
                alert("O usuário foi cadastrado.")
                this.setState({nome:"", email:""})
            })
            .catch((error) => {
                alert("Erro, tente novamente!")
            })

    }
    

    render() {
        return(
            <ContainerCadastro>
                <ContainerForm>
                    <h1>Cadastrar Usuários</h1>
                    <input
                        placeholder="Nome"
                        value={this.state.nome}
                        onChange={this.controlInputNome}
                    />
                    <input
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.controlInputEmail}
                    />
                    <button 
                        onClick={this.cadastrarUsuario}>
                        Cadastrar
                    </button>
                    <button 
                        onClick={this.props.renderLista}>
                        Lista de Usuários
                    </button>
                </ContainerForm>

            </ContainerCadastro>
        )
    }
}