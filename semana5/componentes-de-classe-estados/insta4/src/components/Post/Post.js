import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'

//import iconeSalvoBranco from '../../img/salvobranco.svg'
//import iconeSalvoPreto from '../../img/salvopreto.svg'
import iconeSalvoBranco from '../../img/salvobranco.png'
import iconeSalvoPreto from '../../img/salvopreto.png'
import iconeCompartilhar from '../../img/compartilhar.png'


import iconeComentario from '../../img/comment_icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilha } from '../SecaoCompartilha/SecaoCompartilha'




const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`




class Post extends React.Component {
  state = {
    curtido: false, // linha 71 - linha 75
    salvo: false,
    numeroCurtidas: 0, //
    comentando: false, //linha 55 - linha 57
    compartilhando: false,
    numeroComentarios: 0 //linha 61 - linha 65
  }


  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
  }

  onClickSalvo = () => {
    this.setState({
      salvo: true
    })
    alert("Salvo!")
  }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () =>{
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

aoCompartilhar = () => {
  this.setState({
    compartilhando: false
  })
}
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvo 

    if(this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    } else {
      iconeSalvo = iconeSalvoBranco
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhando

    if(this.state.compartilhando) {
      componenteCompartilhando = <SecaoCompartilha compartilhar={this.aoCompartilhar}/>    
    }

  
    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida} 
          onClickIcone={this.onClickCurtida} 
          valorContador={this.state.numeroCurtidas} 
          />

        <IconeComContador 
          icone={iconeSalvo}
          onClickIcone = {this.onClickSalvo}
        />

        <IconeComContador 
          icone={iconeCompartilhar}
          onClickIcone = {this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhando}
    </PostContainer>
  }
}

export default Post