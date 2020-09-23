const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('admin', AdminSchema)