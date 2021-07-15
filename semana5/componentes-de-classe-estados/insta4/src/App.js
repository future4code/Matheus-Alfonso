import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'batman',
        fotoUsuario: 'https://d2bsjm9patfdz0.cloudfront.net/images/0000050_batman.png',
        fotoPost:'https://http2.mlstatic.com/D_NQ_NP_957529-MLB43762859260_102020-O.webp'
      },
      {
        nomeUsuario:'ze carioca',
        fotoUsuario:'https://diariodorio.com/wp-content/uploads/2016/10/Z%C3%A9-Carioca-1.jpg',
        fotoPost:'https://diariodorio.com/wp-content/uploads/2011/07/Ze-Carioca.jpg'
      }
      ],
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
  }

  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <MainContainer>
          <Post
            {...post.nomeUsuario}
            {...post.fotoUsuario}
            {...post.fotoPost}
          />

        </MainContainer>
      )
    })

    return (
        <div>
           {listaPosts}
           <div>
            <input 
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder="Nome"
            />
            <input 
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder="Link Foto Usuario"
            />
            <input 
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder="Link Foto Post"
            />
            <button>Publicar</button>
          </div>
        </div>
      /*<MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'batman'}
          fotoUsuario={'https://d2bsjm9patfdz0.cloudfront.net/images/0000050_batman.png'}
          fotoPost={'https://http2.mlstatic.com/D_NQ_NP_957529-MLB43762859260_102020-O.webp'}
        />
        <Post
          nomeUsuario={'ze carioca'}
          fotoUsuario={'https://diariodorio.com/wp-content/uploads/2016/10/Z%C3%A9-Carioca-1.jpg'}
          fotoPost={'https://diariodorio.com/wp-content/uploads/2011/07/Ze-Carioca.jpg'}
        />
      </MainContainer>*/
    );
  }
}

export default App;
