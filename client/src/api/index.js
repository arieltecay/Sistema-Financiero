import axios from 'axios';

// const urlmovimiento = 'https://tecayfinancials.herokuapp.com/movimientos'
const urlmovimiento = 'http://localhost:5000/movimientos'

export const fetchMovimiento = () => axios.get(urlmovimiento)
export const createMovimiento = (newMovimiento) => axios.post(urlmovimiento, newMovimiento)
export const updateMovimiento = (id, updatedMovimiento) => axios.patch(`${urlmovimiento}/${id}`, updatedMovimiento);