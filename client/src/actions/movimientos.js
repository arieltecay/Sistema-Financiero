import * as api from '../api'

//Actions Creators

export const getMovimientos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovimiento();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createMovimiento = (movimiento) => async (dispatch) => {
    try {
        const { data } = await api.createMovimiento(movimiento);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log("Error Criminal", error);
    }
}

export const updateMovimiento = (id, movimiento) => async (dispatch) => {
    try {
        const { data } = await api.updateMovimiento(id, movimiento);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
