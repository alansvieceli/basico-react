import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponenteArrow from './Componentes/PrimeiroComponenteArrow'

//import {CompA, CompB} from './Componentes/DoisComponentes'
//import CompA from './Componentes/DoisComponentes'
import CompA, {CompB as B} from './Componentes/DoisComponentes'

//import MultiElementos from './Componentes/MultiElementos';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* 
        <PrimeiroComponenteArrow valor="XyZ" /> 
        */}
        <CompA valor="A" />
        <B valor="B" />        
        {/*
        <MultiElementos />
        */}
    </div>,
    elemento);

