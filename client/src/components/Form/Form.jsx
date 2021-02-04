import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import xCircle from '../../assets/x-circle.svg'
import plusCircle from '../../assets/plus-circle.svg'
import useStyles from './styles.js'
import './form.css'
import { useDispatch } from 'react-redux';
import { createMovimiento } from '../../actions/movimientos'

const Form = () => {
    const dispatch = useDispatch()
    const classes = useStyles();

    const [postData, setPostData] = useState({
        descripcion: '',
        sucursal: '',
        proveedor: '',
        debe: '',
        haber: '',
    })

    const handleInputChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMovimiento(postData))
        clear();
    }
    const clear = () => {
        setPostData({ descripcion: '', sucursal: '', proveedor: '', haber: '', debe: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={e => handleSubmit(e)} >
                <Typography variant='h6' >Movimientos</Typography>
                <TextField
                    name='descripcion'
                    variant='filled'
                    label='Descripcion'
                    fullWidth
                    value={postData.descripcion}
                    required
                    onChange={(e) => handleInputChange(e)}
                />
                <FormControl variant="filled" className={classes.formControl}>
                    <FormLabel>Sucursal</FormLabel>
                    <RadioGroup row={true}
                        name='sucursal'
                        value={postData.sucursal}
                        onChange={(e) => handleInputChange(e)}>
                        <FormControlLabel value='H1' control={<Radio />} label='H1' />
                        <FormControlLabel value='H2' control={<Radio />} label='H2' />
                    </RadioGroup>
                </FormControl>
                <TextField
                    name='proveedor'
                    variant='filled'
                    label='Proveedor'
                    fullWidth
                    required
                    value={postData.proveedor}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    name='haber'
                    type='number'
                    variant='filled'
                    label='Movimiento'
                    required
                    fullWidth
                    min={0}
                    value={postData.haber}
                    onChange={(e) => handleInputChange(e)}
                />
                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    color="primary"
                    size='large'
                    type='submit'
                    fullWidth >
                    Submit
                    <img className='xCircle' src={plusCircle} alt=""/>
                    </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    color='secondary'
                    size='large'
                    onClick={clear}
                    fullWidth >
                    Clear
                    <img className='xCircle' src={xCircle} alt=""/>
                    </Button>
            </form>
        </Paper>
    )
}
export default Form