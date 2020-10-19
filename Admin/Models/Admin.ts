const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    nid: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

const admin = mongoose.model('Admin', AdminSchema)


export default admin;