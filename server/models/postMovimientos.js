import mongoose from 'mongoose';

const postMovimientos = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    descripcion: String,
    sucursal: String,
    proveedor: String,
    debe: Number,
    haber: Number,
    observacion: String
});

const PostMovimientos = mongoose.model('PostMovimientos', postMovimientos);

export default PostMovimientos;