const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    role_name: {
        type:String
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

module.exports = mongoose.model('Role', RoleSchema);