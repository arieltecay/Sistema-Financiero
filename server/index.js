import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import movimientosRoute from './routes/movimientos.js'
import saldoRoute from './routes/saldo.js'

const app = express();
dotenv.config();

app.use(bodyparser.json({ limit: '30mb', extended: true }));
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())

app.use('/movimientos', movimientosRoute)
app.use('/saldo', saldoRoute)

app.get('/',(req,res)=>{
    res.send('Sistema Deployado')
})

const CONECCTION_URL = 'mongodb+srv://brunotecay:brunotecay123@cluster0.653xl.mongodb.net/Cluster0?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONECCTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))