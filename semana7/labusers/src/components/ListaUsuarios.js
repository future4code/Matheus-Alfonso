import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerLista = styled.div ` 
    display: flex;
    align-items: center;
    flex-direction: column;

`

const ListaDeUsuarios = styled.div ` 
    margin: 15px;
    width: 400px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightgray;
    border-radius: 8px;
`

export default class ListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }
    
    componentDidMount() {
        this.requisitarUsuarios()
    }

    requisitarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
        .get(url, 
            {headers: {
                Authorization : "matheus-alfonso-lovelace"
        }})
        .then((response)=>{
            this.setState({usuarios:response.data})
        })
        .catch((error) => {
            alert("Erro! Tente novamente.")
        })
    }
    
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios
        .delete(url, 
            {headers:{
                Authorization : "matheus-alfonso-lovelace"
        }
    })
        .then((response) => {
            alert("Usuário deletado.")
            this.requisitarUsuarios()
        })
        .catch((error) => {
            console.log(error)
        })
    }





    render() {

        const listarUsuarios = this.state.usuarios.map((usuario) =>{
            return (
                <ListaDeUsuarios key={usuario.id}>
                    {usuario.name}
                    <button 
                        onClick={()=>this.deletarUsuario(usuario.id)}
                    >
                        Deletar
                    </button>
                </ListaDeUsuarios>
            )
        })

        return (
            <ContainerLista>
                <h1>Lista de Usuarios</h1>
                {listarUsuarios}
                <button
                    onClick={this.props.renderCadastrar}>
                    Voltar
                </button>
            </ContainerLista>
        )
    }
}