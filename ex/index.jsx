import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import operacaoReducer from './operacaoReducer'
import Operacao from './operacao'

const reducers = combineReducers({
    operacao: operacaoReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Operacao />
    </Provider>
, document.getElementById('app'))