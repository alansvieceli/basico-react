import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponenteArrow from './Componentes/PrimeiroComponente/PrimeiroComponenteArrow'

//import {CompA, CompB} from './Componentes/DoisComponentes/DoisComponentes'
//import CompA from './Componentes/DoisComponentes/DoisComponentes'
//import CompA, {CompB as B} from './Componentes/DoisComponentes/DoisComponentes'

//import MultiElementos from './MultiElementos/MultiElementos';

//import FamiliaSilva from './Componentes/Familia/FamiliaSilva'
//import Familia from './Componentes/Familia/Familia'
//import Membro from './Componentes/Membro/Membro'

//import Pai from './Componentes/Comunicacao/Pai'

//import ComponenteComFuncao from './Componentes/ComponenteComFuncao/ComponenteComFuncao'

import ComonenteClasse from './Componentes/ComponenteClasse/ComponenteClasse'

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* 
        <PrimeiroComponenteArrow valor="XyZ" />         
        <CompA valor="A" />
        <B valor="B" />                
        <MultiElementos />        
        <FamiliaSilva />        
        <Familia  sobrenome="Vieceli" >
            <Membro nome="Alan" />
            <Membro nome="Jaque" />
        </Familia>
        <Familia sobrenome="Silva">
            <Membro nome="Rosa" />
            <Membro nome="Graziela" />
        </Familia>
        

        <ComponenteComFuncao />
        
        <Pai />
        */}

        <ComonenteClasse valor="Contador" numero={0} />
    </div>,
    elemento);

