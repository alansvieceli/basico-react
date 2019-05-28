import React from 'react'
import Filho from './Filho'

export default (props) => {
    const notificacaoSaidaDoFilho = (lugar, p2) => alert(`Liberado para ${p2}`)

    return (
        <div>
            <Filho notificarSaida={notificacaoSaidaDoFilho} />
        </div>
    )
}