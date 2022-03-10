const mongoose = require('mongoose');
const Rol = require('./Role');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
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
    email: {
        type: String,
        required: true
    },
    phone: {
        type: [Number],
        required: true
    },
    specialty: {
        type: [{_id:mongoose.Schema.Types.ObjectId, name:String}],
        default: []
    },
    role: {
        type: [{_id:mongoose.Schema.Types.ObjectId, name: String}],
        default:[]
    },
    status: {
        type: Boolean,
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

module.exports = mongoose.model('User', UserSchema);