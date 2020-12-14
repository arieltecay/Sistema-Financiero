export default (movimientos = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...movimientos, action.payload];
        case 'UPDATE':
            return movimientos.map((mov) => mov._id === action.payload._id ? action.payload : mov)
        default:
            return movimientos;
    }
}