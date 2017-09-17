var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    event: {
        type: Number,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
});

module.exports = ImageSchema;


