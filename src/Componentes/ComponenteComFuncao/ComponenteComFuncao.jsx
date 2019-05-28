import React from 'react'


const aprovados = ["alan", "java", "vander", "lidi", "kevin", "veronica"]

export default (props) => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )

}