import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/'
import App from './App'
import { SaldoProvider } from './context/saldoContext'
import './index.css'


const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDom.render(
    <Provider store={store}>
        <SaldoProvider>
            <App />
        </SaldoProvider>
    </Provider>,
    document.getElementById('root')
);