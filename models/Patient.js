const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    dni: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: [Number],
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required:true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Patient', PatientSchema);