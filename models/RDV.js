const mongoose = require('mongoose')

const RdvSchema = mongoose.Schema({
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
    Phone: {
        type: String,
        required: true
    },
    Hour: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('rdv', RdvSchema)