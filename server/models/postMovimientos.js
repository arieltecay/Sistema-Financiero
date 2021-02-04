import mongoose from 'mongoose';

const postMovimientos = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    descripcion: String,
    sucursal: String,
    proveedor: String,
    debe: {
        type: Number,
        default: 0
    },
    haber: {
        type: Number,
        default: 0
    },
    observacion: {
        type: String,
        default: 'Pendiente'
    },
    id: {
        type: Number
    }
});

const PostMovimientos = mongoose.model('PostMovimientos', postMovimientos);

export default PostMovimientos;