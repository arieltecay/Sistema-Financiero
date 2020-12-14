import React, { useEffect, useState } from 'react'
import FormMovimientos from './components/movimientos/FormMovimiento'
import Movimientos from './components/movimientos/Movimientos'
import Saldo from './components/saldo/Saldo'
import { useDispatch } from 'react-redux';
import { getMovimientos } from './actions/movimientos'
import { getSaldos } from './actions/saldos'
import { } from './reducers/saldos'

import useStyles from './styles'
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
const App = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getMovimientos(),
            getSaldos()
        )
    }, [dispatch])

    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Saldo />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={11} sm={8}>
                            <Movimientos setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormMovimientos currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;