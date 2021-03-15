import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <div>
        <BoaTarde nome="Brunno"/>
        <BoaNoite nome="Carol"/>
    </div>,
    document.getElementById('root')
)

