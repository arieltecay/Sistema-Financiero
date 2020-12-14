import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updateMovimiento } from '../../actions/movimientos'
import Swal from 'sweetalert2'
import './modalPago.css'
import { TextField, Button } from '@material-ui/core';

export default function ModalPago(props) {

    const dispatch = useDispatch();

    const { datos } = props
    const [datosEditar, setDatosEditar] = useState()
    const [editar, setEditar] = useState(false)

    const handleChange = (e) => {
        setDatosEditar({
            ...datosEditar,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateMovimiento(datos._id, datosEditar));
        setEditar(true);
    }
    if (editar) {
        Swal.fire(
            'Good job!',
            '',
            'success',
            'confirmButtonText: Yes'
        ).then(function (result) {
            if (result.value) {
                window.location = '/'
            }
        })
    }
    return (
        datos && (
            <div>
                <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" >
                    <Modal.Header className='title' >
                        <Modal.Title id="contained-modal-title-vcenter" >
                            <p  >Pagar</p>
                        </Modal.Title>
                    </Modal.Header>

                    <div className='containerModal'>
                        <form
                            autoComplete='off'
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <div className='campos'>
                                <div>
                                    <TextField
                                        name='debe'
                                        label='Ingrese un Monto'
                                        defaultValue={datos.haber}
                                        onChange={(e) => { handleChange(e) }}
                                        variant='standard'
                                        type='number'
                                        required
                                    />
                                </div>
                                <div className='observacion'>
                                    <TextField
                                        name='observacion'
                                        label='Observacion Adicional'
                                        variant='standard'
                                        onChange={(e) => { handleChange(e) }}
                                        helperText='Campo Opcional'
                                        multiline
                                        rowsMax={2}
                                    />
                                </div>
                            </div>
                            <div className='boton' >
                                <Button
                                    type='submit'
                                    variant='contained'
                                    disableElevation
                                    color='primary'>Aceptar</Button>
                            </div>
                        </form>
                    </div>

                </Modal>
            </div>
        )
    )
}