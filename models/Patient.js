const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    dni: {
        type: Number,
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
    lastname_p: {
        type: String,
        required: true
    },
    lastname_m: {
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
    ubigeo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
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