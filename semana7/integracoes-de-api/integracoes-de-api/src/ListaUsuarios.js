import React from 'react';
import axios from 'axios';
import styled, { ThemeConsumer } from 'styled-components'
import './App.css';

export default class ListaUsuarios extends React.Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
          {this.props.listaPronta}
      </div>
    );
  }
}