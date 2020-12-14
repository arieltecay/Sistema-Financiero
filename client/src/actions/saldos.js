import * as api from '../api'

//Actions Creators

export const getSaldos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSaldo();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}