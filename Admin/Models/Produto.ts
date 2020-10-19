const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProdutoSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    preco: {
        type: String,
        required: true
    },

    id: {
        type: String,
        required: true
    }

}) 

const pedido = mongoose.model('produto', ProdutoSchema)

export default pedido;