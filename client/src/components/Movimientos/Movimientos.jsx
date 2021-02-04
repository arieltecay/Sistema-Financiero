import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
// import { Card, Button } from 'react-bootstrap'
import Movimiento from './Movimiento/Movimiento'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import './movimientos.css'

export default function Movimientos() {

    const [currentPage, setCurrentPage] = useState(1)
    const [movimientosPerPage] = useState(9)
    const movimientos = useSelector(state => state.movimientos)

    //Get Currents Pacients
    const indexOfLast = currentPage * movimientosPerPage;
    const indexOfFirst = indexOfLast - movimientosPerPage;
    const currentMovimiento = movimientos.slice(indexOfFirst, indexOfLast)
    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        !movimientos.length ? <Spinner animation="border" variant="primary" /> : (
            <div className='container'>
                <div className='pagination'>
                    <Pagination
                        postsPerPage={movimientosPerPage}
                        totalPosts={movimientos.length}
                        paginate={paginate}
                        className='pagination-button'
                    />
                </div>
                <div className="row">
                    {currentMovimiento.map((mov) => (
                        <div className="col-4">
                            <Movimiento mov={mov} />
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}