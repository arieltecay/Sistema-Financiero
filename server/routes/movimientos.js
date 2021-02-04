import express from 'express';
import { getMovimientos, createMovimientos, updateMovimiento } from '../controllers/movimientos.js'

const router = express.Router();

router.get('/', getMovimientos);
router.post('/', createMovimientos);
router.patch('/:id', updateMovimiento)

export default router;