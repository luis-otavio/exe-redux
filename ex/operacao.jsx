import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { comprimento, area, volume, raioChanged } from './operacaoActions'

const Operacao = props => (
    <div>
        <h1> Resultado: {props.operacao.number}</h1>
        <input 
            onChange={props.raioChanged}
            value={props.operacao.raio} type='number' />
        <button onClick={props.comprimento}>Comprimento</button>
        <button onClick={props.area}>Area</button>
        <button onClick={props.volume}>Volume</button>
    </div>
)

const mapStateToProps = state => ({ operacao: state.operacao })

const mapDispatchToProps = 
    dispatch => bindActionCreators({ comprimento, area, volume, raioChanged }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(Operacao)