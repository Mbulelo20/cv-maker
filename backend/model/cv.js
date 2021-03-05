const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cvSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String, 
    },
    region: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model('CV', cvSchema);