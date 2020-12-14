export default (saldos = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return saldos;
        default:
            return saldos;
    }
}