import React from 'react'

export default props => (
    <div>
        <button onClick={() => props.notificarSaida('Praia', 'X')}>
            Vou Sair
        </button>
    </div>
)
