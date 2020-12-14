import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Saldo() {

    const saldos = useSelector(state => state.saldos)

    const lista = saldos.map(item => ({
        price: item.haber
    }));
    const sumaHaberes = lista.reduce((prev, next) => prev + next.price, 0);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    return (
        <div>
            <p className='saldo'>
                <div className={sumaHaberes > 1500 ? 'saldoBlue' : 'saldoRed'}>
                    Saldo: {formatter.format(sumaHaberes)}
                </div>
            </p>
            <div>Debe:</div>
            <div>Haber:</div>
        </div>
    )
}