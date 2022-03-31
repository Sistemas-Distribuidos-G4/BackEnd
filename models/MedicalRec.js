const mongoose = require('mongoose');

const MedicalRecSchema = mongoose.Schema({
    num_history: {
        type: Number,
        required: true
    },
    dni_patient: {
        type: Number,
        required: true
    },
    blood_type: {
        type: String,
        required: true
    },
    family_medical_history: {
        type: String,
        required: true
    },
    organ_donor: {
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

module.exports = mongoose.model('MedicalRec', MedicalRecSchema);