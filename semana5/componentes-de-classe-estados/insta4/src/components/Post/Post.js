import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'

//import iconeSalvoBranco from '../../img/salvobranco.svg'
//import iconeSalvoPreto from '../../img/salvopreto.svg'
import iconeSalvoBranco from '../../img/salvobranco.png'
import iconeSalvoPreto from '../../img/salvopreto.png'


import iconeComentario from '../../img/comment_icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'




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
    numeroComentarios: 0 //linha 61 - linha 65
  }






// linha 94
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

//Altera o estado inicial da propriedade "comentando". Se for true passa a ser falso e vice-versa
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
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






    
    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida} // Imagem do icone curtida (curtido ou nao) vindo do if da linha 71

          onClickIcone={this.onClickCurtida} //Chama a funçao onClickCurtida e mostra no console que foi curtido - linha 51
          valorContador={this.state.numeroCurtidas} //Mostra o numero de curtidas, vindo do estado do componente - linha 46
        />

        <IconeComContador 
          icone={iconeSalvo}
          onClickIcone = {this.onClickSalvo}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post