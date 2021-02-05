import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SaldoContext } from './context/saldoContext'
import { formatter } from './components/Movimientos/Movimiento/Movimiento'
import wallet2 from './assets/wallet2.svg'

import { getMovimientos, createMovimiento, updateMovimiento } from './actions/movimientos'
import Form from './components/Form/Form'
import Movimientos from './components/Movimientos/Movimientos'
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import useStyles from './styles'
import './app.css'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { total } = useContext(SaldoContext)

    useEffect(() => {
        dispatch(
            getMovimientos(),
            createMovimiento(),
            updateMovimiento(),
        )
    }, [dispatch])

    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <div className={total <= 0 ? 'saldoN' : 'saldo'}>
                    <div className='saldoT'>
                        <img className='wallet' src={wallet2} alt="" />
                        Saldo</div>
                    {formatter.format(total)}
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Movimientos />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;