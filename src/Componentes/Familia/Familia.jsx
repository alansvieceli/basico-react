import React from 'react'
import {filhosComProps} from '../../utils/utils'

export default (props) => (
    <div>
        <h2>Família</h2>
        {/*props.children*/}

        {/*React.cloneElement(props.children, {...props}) - só funciona pra um elemento*/}
                
        {/*React.Children.map(props.children, componenteFilho => {
            return React.cloneElement(componenteFilho, {...props});
        })*/}

        {filhosComProps(props)}
    </div>
)