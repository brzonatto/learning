import React from 'react'

const BomDia = props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </div>

    // ou 
    // <React.Fragment>
    //     <h1>Bom dia {props.nome}!</h1>
    //     <h2>Até Breve!</h2>
    // </React.Fragment>
    
export default BomDia