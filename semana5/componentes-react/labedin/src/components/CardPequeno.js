import React from 'react';

const CardPequeno = (props) => {
    return (
        <div>
            <p>{props.email}</p>
            <p>{props.endereco}</p>      
        </div>
    )
}

export default CardPequeno;