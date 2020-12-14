import { combineReducers } from 'redux';
import movimientos from './movimientos'
import saldos from './saldos'

export default combineReducers({
    movimientos, saldos
})