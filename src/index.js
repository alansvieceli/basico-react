import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponenteArrow from './Componentes/PrimeiroComponenteArrow'
import {CompA, CompB} from './Componentes/DoisComponentes'

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* <PrimeiroComponenteArrow valor="XyZ" /> */}
        <CompA valor="A" />
        <CompA valor="B" />
    </div>,
    elemento);

