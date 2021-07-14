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
  render() {
    return (
      <MainContainer>
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
      </MainContainer>
    );
  }
}

export default App;
