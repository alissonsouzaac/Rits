const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ClientSchema = new Schema({
    email: {
        type: String,
        //validate: function (email: String) { const len = email.match(/@/g); return len ? len.length == 1 : false; },
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    endereco: {
        type: String, 
        required: true,
    },
    codClient: {
        type: String
    }
});

const Client = mongoose.model('cliente', ClientSchema)

export default Client;