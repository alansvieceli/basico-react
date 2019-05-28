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
        <Familia>
            <Membro nome="Alan" sobrenome="Vieceli" />
            <Membro nome="Jaque" sobrenome="Vieceli" />
        </Familia>
        <Familia>
            <Membro nome="Rosa" sobrenome="Silva" />
            <Membro nome="Graziela" sobrenome="Silva" />
        </Familia>
    </div>,
    elemento);

