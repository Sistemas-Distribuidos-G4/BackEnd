const mongoose = require('mongoose');

const SpecialtySchema = mongoose.Schema({
    id: {
        type : String
    },
    name: {
        type : String
    },
    status: {
        type : Boolean
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

module.exports = mongoose.model('Specialty', SpecialtySchema);

