import express from 'express';
import { getSaldos } from '../controllers/saldo.js'

const router = express.Router();

router.get('/', getSaldos);

export default router;