import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles.js'
import { useDispatch } from 'react-redux';
import { createMovimiento, getMovimientos } from '../../actions/movimientos'

export default function Movimiento() {

    const dispatch = useDispatch()
    const [editar, setEditar] = useState(false)
    const [postData, setPostData] = useState({
        descripcion: '',
        sucursal: '',
        proveedor: '',
        haber: '',
    })

    const classes = useStyles();

    const handleInputChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMovimiento(postData))
        setEditar(true)
    }
    const clear = () => {
        setPostData({ descripcion: '', sucursal: '', proveedor: '', haber: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={e => handleSubmit(e)} >
                <Typography variant='h6' >Movimientos</Typography>
                <TextField
                    name='descripcion'
                    variant='outlined'
                    label='Descripcion'
                    fullWidth
                    value={postData.descripcion}
                    required
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    name='sucursal'
                    variant='outlined'
                    label='Sucursal'
                    fullWidth
                    required
                    value={postData.sucursal}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    name='proveedor'
                    variant='outlined'
                    label='Proveedor'
                    fullWidth
                    required
                    value={postData.proveedor}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    name='haber'
                    type='number'
                    variant='outlined'
                    label='Ingreso'
                    required
                    fullWidth
                    min={0}
                    value={postData.haber}
                    onChange={(e) => handleInputChange(e)}

                />
                <Button className={classes.buttonSubmit} variant='contained' color="primary" size='large' type='submit' fullWidth >Submit</Button>
                <Button className={classes.buttonSubmit} variant='contained' color='secondary' size='large' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper >
    )
}