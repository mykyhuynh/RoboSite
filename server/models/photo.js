var mongoose = require('mongoose');

var PhotoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true 
	},
	slide: {
		type: Number,
		required: true
	},
	alt: {
		type: String,
		required: true
	}
});

module.exports = PhotoSchema;
