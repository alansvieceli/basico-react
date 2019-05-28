import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponenteArrow from './Componentes/PrimeiroComponenteArrow'

//import {CompA, CompB} from './Componentes/DoisComponentes'
//import CompA from './Componentes/DoisComponentes'
//import CompA, {CompB as B} from './Componentes/DoisComponentes'

//import MultiElementos from './Componentes/MultiElementos';
//import FamiliaSilva from './Componentes/FamiliaSilva'

import Familia from './Componentes/Familia'
import Membro from './Componentes/Membro'

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* 
        <PrimeiroComponenteArrow valor="XyZ" />         
        <CompA valor="A" />
        <B valor="B" />                
        <MultiElementos />        
        <FamiliaSilva />
        */}
        <Familia  sobrenome="Vieceli" >
            <Membro nome="Alan" />
            <Membro nome="Jaque" />
        </Familia>
        <Familia sobrenome="Silva">
            <Membro nome="Rosa" />
            <Membro nome="Graziela" />
        </Familia>
    </div>,
    elemento);

