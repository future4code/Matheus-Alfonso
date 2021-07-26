import React, { Component } from 'react';
import PerguntaAberta from './PerguntaAberta';

class Etapa1 extends Component {
    state = {
        escolaridade: ""
    }

    mudaEnsino (event) {
        console.log(event.target.value)
        this.setState({escolaridade: event.target.value})
    }

    render(){
        return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
            <select onChange={this.mudaEnsino}>
                <option value="1">Ensino médio incompleto</option>
                <option value="2">Ensino médio completo</option>
                <option value="3">Ensino superior incompleto</option>
                <option value="4">Ensino superior completo</option>
            </select>
        </div>
        )
    }
}

export default Etapa1;