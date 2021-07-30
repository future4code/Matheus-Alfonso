import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

const MainContainer = styled.div ` 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;

`

const ContainerFoguetes = styled.div ` 
  width: 300px;
  background-color: grey;
  color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;

`

export default class App extends React.Component {
  
  state = {
    rocket: []
  }
  
  requestRockets = () => {
    const url = "https://api.spacexdata.com/v3/rockets"

    axios
    .get(url)
    .then((res => {
      this.setState({rocket: res.data})
    }))
    .catch((err)=>{

    })
  }

  componentDidMount(){
    this.requestRockets()
  }
  
  render() {
    const rocketList = this.state.rocket.map((rocket)=> {
      return (
        <ContainerFoguetes>
          <p>Número de lançamento: {rocket.id}</p>
          <p>Primeiro vôo: {rocket.first_flight}</p>
          <p>Custo: ${rocket.cost_per_launch}</p>
          <p>País: {rocket.country}</p>
        </ContainerFoguetes>
      )
    })

    return (
      <MainContainer>
        <h1>Informações foguetes SpaceX</h1>
        {rocketList}
      </MainContainer>
    );
  }
}

