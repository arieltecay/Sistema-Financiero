import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SaldoContext } from '../../../context/saldoContext'
import Imprimir from '../../Imprimir/Imprimir'
import printer from '../../../assets/printer.svg'

import Date from './date'
import './movimiento.css'

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

const Movimiento = (props) => {

    const saldos = useSelector(state => state.movimientos)
    const { addTotal } = useContext(SaldoContext)
    const [imprimir, setImprimir] = useState(false)

    const haber = saldos.map(item => ({ price: item.haber }));
    const sumaHaber = haber.reduce((prev, next) => prev + next.price, 0);

    addTotal(sumaHaber)
    const saldoDebe = props.mov.haber - props.mov.debe

    const print = () => {
        setImprimir(!imprimir)

    }
    return (
        <div className='tarjetas'>
            {imprimir && <Imprimir
                datos={props.mov}
                mostrar={imprimir}
            />}
            <Card
                border={saldoDebe > 0 ? 'primary' : 'danger'}
                style={{ width: '18rem' }}
                className='tarjetasPersonal'>
                <Card.Header className='header'>
                    Sucursal: {(props.mov.sucursal).toUpperCase()}
                </Card.Header>
                <Card.Body>
                    <div className='botones'>
                        <Date date={props.mov.createdAt} />
                    </div>
                    <div className='titulo'>
                        <Card.Title>{props.mov.proveedor}</Card.Title>
                    </div>
                    <Card.Text>{props.mov.descripcion}</Card.Text>
                </Card.Body>
                <div className='footer'>
                    <Card.Footer>
                        <div
                            className={saldoDebe < 0 ? 'saldoDebe' : 'saldoDebeN'}>
                            <div className='movimiento'>
                                Movimiento: {saldoDebe === 0 ?
                                    formatter.format(0) :
                                    formatter.format(saldoDebe)}
                            </div>
                        </div>
                        <div className='imprimir'>
                            <button className='btn btn-outline-primary btn-block' onClick={() => print()} >
                                Imprimir
                          <img className='printer' src={printer} alt='' />
                            </button>
                        </div>

                    </Card.Footer>
                </div>
            </Card>
        </div>
    )
}
export default Movimiento;