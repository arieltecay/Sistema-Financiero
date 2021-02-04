import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useReactToPrint } from 'react-to-print';
import Date from '../Movimientos/Movimiento/date'
import { formatter } from '../Movimientos/Movimiento/Movimiento'
import printer from '../../assets/printer.svg'
import './imprimir.css'
export default function Imprimir(props) {

    const [show, setShow] = useState(props.mostrar)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        props.datos && (
            <div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter" >
                    <Modal.Header
                        className='title'
                        id='fuente-personalizada' >Imprimir</Modal.Header>
                    <div ref={componentRef} >
                        <Modal.Title 
                        id="fuente-personalizada" 
                        className='title'>Recibo N°:(_________)</Modal.Title>
                        <div className='recibo'>
                            <div className='fecha'>
                                <Date
                                    date={props.datos.createdAt}
                                />
                            </div>
                            <p>Recibí de:___________________________________________________</p>
                            <p>La cantidad de__________{formatter.format(-props.datos.haber)} Pesos_______________</p>
                            <p>en concepto de ____{props.datos.descripcion}______</p>
                        </div>
                        <div className='recibo'>
                            <p>Son: {formatter.format(-props.datos.haber)} Pesos</p>
                            <p>Firma: ____________________</p>
                            <p>Aclaración: ________________</p>
                            <p>DNI: ______________________</p>
                        </div>
                    </div>
                    <div className='botonImprimir'>
                        <Button onClick={handlePrint}>
                            Imprimir
                            <img src={printer} alt="" className='printer' />
                        </Button>
                    </div>
                </Modal>
            </div >
        )
    )
}
