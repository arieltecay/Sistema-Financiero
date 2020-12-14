import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import './movimientos.css'
import Table from 'react-bootstrap/Table'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PrintIcon from '@material-ui/icons/Print';
import Pagination from './pagination'
import Modal from './ModalPago'
import Swal from 'sweetalert2'
import { updateMovimiento } from '../../actions/movimientos'


import moment from 'moment'

export default function Movimientos() {

    const movimientos = useSelector(state => state.movimientos)
    // console.log(movimientos[0].createdAt);
    const [abrirModal, setAbrirModal] = useState(false)
    const [datos, setDatos] = useState()

    const [currentPage, setCurrentPage] = useState(1)
    const [movimientosPerPage] = useState(10)

    const pagar = (mov) => {
        setAbrirModal(!abrirModal)
        setDatos(mov)
    }

    //Get Currents Pacients
    const indexOfLast = currentPage * movimientosPerPage;
    const indexOfFirst = indexOfLast - movimientosPerPage;
    const currentMovimiento = movimientos.slice(indexOfFirst, indexOfLast)
    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (

        !movimientos.length ? <CircularProgress /> : (
            <Container maxidth='lg'>
                {abrirModal && <Modal show={abrirModal} onHide={() => setAbrirModal(false)} datos={datos} />}
                <div className='pagination'>
                    <Pagination
                        postsPerPage={movimientosPerPage}
                        totalPosts={movimientos.length}
                        paginate={paginate}
                        className='pagination-button'
                    />
                </div>
                <div className='container table-size'>
                    <Table
                        className="table"
                        striped
                        bordered
                        hover
                        responsive>
                        <thead>
                            <tr className='cabecera'>
                                <th>Fecha</th>
                                <th>Descripción</th>
                                <th>Sucursal</th>
                                <th>Haber</th>
                                <th>Observación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentMovimiento.map((mov) => (
                                <tr key={mov.id} >

                                    <td data-titulo='Fecha'>{moment(mov.createdAt).format('D/MM/YY HH:mm')}</td>
                                    <td data-titulo='Descripcion'>{mov.descripcion}</td>
                                    <td data-titulo='Sucursal'>{mov.sucursal}</td>
                                    <td data-titulo='Haber'>${mov.haber}</td>
                                    <td data-titulo='observacion'> {mov.observacion} </td>
                                    <td className='botones' >
                                        <button className="btn btn-primary btn-sm" onClick={(e) => pagar(mov)}>
                                            <MonetizationOnIcon fontSize='small' />
                                        Pagár</button>
                                        {" "}
                                        <button className="btn btn-secondary btn-sm">
                                            <PrintIcon fontSize='small' />
                                        Imprmir</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </div>
            </Container>

        )
    )
}
