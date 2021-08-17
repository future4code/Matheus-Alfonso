import React from 'react';
import styled from 'styled-components'
import axios from 'axios';




import Playlists from './components/Playlists';
import Tracks from './components/Tracks';


const Container = styled.div `
  font-family: Brush Script MT, cursive;

  background-color: black;
  border-radius: 20px;

  width: 70%;
  margin: 30px auto;
  padding: 20px;
  height: 80vh;

  display: flex;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Playlists></Playlists>
        <Tracks></Tracks>
      </Container>
    );
  }
}
