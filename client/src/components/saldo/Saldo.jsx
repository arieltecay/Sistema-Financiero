import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Saldo() {

    const saldos = useSelector(state => state.saldos)

    const haber = saldos.map(item => ({
        price: item.haber
    }));
    const sumaHaberes = haber.reduce((prev, next) => prev + next.price, 0);

    const debe = saldos.map(item => ({
        price: item.debe
    }));

    const sumaDebe = debe.reduce((prev, next) => prev + next.price, 0);

    const sumaSaldo = sumaHaberes - sumaDebe

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    return (
        <div>
            <p className='saldo'>
                <div className={sumaHaberes > 1500 ? 'saldoBlue' : 'saldoRed'}>
                    Saldo:{formatter.format(sumaSaldo)}
                </div>
            </p>
            <div>
                <div>Debe: {formatter.format(sumaDebe)}</div>
                <div>Haber: {formatter.format(sumaHaberes)}</div>
            </div>
        </div>
    )
}