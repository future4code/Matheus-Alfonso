import React, { Component } from 'react';
import PerguntaAberta from './PerguntaAberta';

class Etapa3 extends Component {
    render(){
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
                <label>6. Você fez algum curso complementar?</label>
                <select>
                    <option></option>
                </select>
            </div>
        )

    }
}

export default Etapa3