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
    counterId: {
        type: Number,
        default:0,
        autoIncrement:true
    }
});

const PostMovimientos = mongoose.model('PostMovimientos', postMovimientos);

export default PostMovimientos;