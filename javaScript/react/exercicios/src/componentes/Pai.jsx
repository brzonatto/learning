import React from 'react'
// import Filho from './Filho'

function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props, ...child.props})
     })
}

export const Pai = props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                childrenWithProps(props)
            }
        </ul>
    </div>

export default Pai