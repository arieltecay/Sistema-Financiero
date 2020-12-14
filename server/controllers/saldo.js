import PostSaldo from '../models/postSaldo.js'

export const getSaldos = async (req, res) => {
    try {
        const postSaldos = await PostSaldo.find();
        res.status(200).json(postSaldos);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createSaldos = async (req, res) => {
    const saldo = req.body;
    const newSaldo = new PostSaldo(saldo);
    try {
        await newSaldo.save()
        res.status(201).json(newSaldo);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}