const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    num_history: {
        type: Number,
        required: true
    },
    dni_medic: {
        type: Number,
        required: true
    },
    specialty: {
        type: [{_id:mongoose.Schema.Types.ObjectId, name:String}],
        default: []
    },
    diagnosis: {
        type: String,
        required: true
    },
    prescriptions: {
        type: String,
        required: true
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

module.exports = mongoose.model('Record', RecordSchema);