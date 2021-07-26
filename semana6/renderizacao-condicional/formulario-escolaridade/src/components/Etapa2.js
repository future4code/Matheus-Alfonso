import React, { Component } from 'react';
import PerguntaFechada from './PerguntaFechada';

class Etapa2 extends Component {
    render(){
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <PerguntaFechada pergunta={"5. Qual curso?"} />
                    <PerguntaFechada pergunta={"6. Qual a unidade de ensino?"} />
            </div>
        )

    }
}

export default Etapa2