import React, {Component} from 'react'

//export default class ComonenteClasse extends React.Component
//ou
export default class ComonenteClasse extends Component {

    state = {
        numero: 0,
        valor: this.props.valor
    }

    maisUm = (event) => {
        this.alterarNumero(null, 1)
    }

    menosUm = (event) => {
        this.alterarNumero(null, -1)
    }

    alterarNumero(event, diferenca){
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render(){
        return (
            <div>
                <div>
                    <b>{this.state.valor || 'Padrão'}</b>
                </div>
                <div>                     
                    <div>Número: {this.state.numero}</div>
                    <button onClick={this.maisUm}>Inc</button>
                    <button onClick={this.menosUm}>Dec</button>
                    <button onClick={(event) => this.alterarNumero(event, 10)}>Inc 10</button>
                    <button onClick={(event) => this.alterarNumero(event, -10)}>Dec 10</button>
                </div>
            </div>
        )
    }
}

//Solução 01 para poder acessar o this dentro do metodo
//bind no contrutor
//constructor(props){
//    super(props)
//    this.maisUm = this.maisUm.bind(this)
//}

//Solução 02 -> função arow no click
//<div>Número? {() => this.props.numero()}</div>

//Solução 03 - função arrow
//maisUm(event)
//trocar
//maisUm = (event) => {