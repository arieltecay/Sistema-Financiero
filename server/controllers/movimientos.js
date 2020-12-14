import mongoose from 'mongoose';
import PostMovimientos from '../models/postMovimientos.js';

export const getMovimientos = async (req, res) => {
    try {
        const postMovimientos = await PostMovimientos.find({}).sort({ _id: -1 });
        res.status(200).json(postMovimientos);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createMovimientos = async (req, res) => {
    const movimiento = req.body;
    const newMovimiento = new PostMovimientos(movimiento);
    try {
        await newMovimiento.save()
        res.status(201).json(newMovimiento);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const updateMovimiento = async (req, res) => {
    const { id } = req.params;
    const { debe, observacion } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No existe el movimiento: ${id}`);

    const updateMovimiento = { _id: id, debe, observacion };
    console.log(updateMovimiento);
    await PostMovimientos.findByIdAndUpdate(id, updateMovimiento, { new: true });

    res.json(updateMovimiento);
}