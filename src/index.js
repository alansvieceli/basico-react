import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponenteArrow from './Componentes/PrimeiroComponenteArrow'
///import {CompA, CompB} from './Componentes/DoisComponentes'
import MultiElementos from './Componentes/MultiElementos';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* 
        <PrimeiroComponenteArrow valor="XyZ" /> 
        <CompA valor="A" />
        <CompA valor="B" />
        */}
        <MultiElementos />
    </div>,
    elemento);

