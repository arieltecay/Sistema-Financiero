import mongoose from 'mongoose';

const postSaldo = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    saldo: Number,
    entrada: Number,
    salida: Number
})

const PostSaldo = mongoose.model('PostSaldo', postSaldo);
export default PostSaldo;