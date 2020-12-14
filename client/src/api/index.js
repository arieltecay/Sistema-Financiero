import axios from 'axios';

const urlSaldo = 'http://localhost:5000/saldo'
const urlmovimiento = 'http://localhost:5000/movimientos'

export const fetchSaldo = () => axios.get(urlSaldo)
export const fetchMovimiento = () => axios.get(urlmovimiento)

export const createMovimiento = (newMovimiento) => axios.post(urlmovimiento, newMovimiento)
export const updateMovimiento = (id, updatedMovimiento) => axios.patch(`${urlmovimiento}/${id}`, updatedMovimiento);