const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    Image: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Service: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cars', CarSchema)