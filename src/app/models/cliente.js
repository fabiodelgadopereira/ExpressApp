const mongoose = require('../../database/db');

const ClienteSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },email:
    {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    cidade:{
        type: String,
        required :true,
    },
    sexo:{
        type: String,
        required :true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('Cliente',ClienteSchema);

module.exports = User;