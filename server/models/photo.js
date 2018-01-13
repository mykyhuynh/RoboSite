var mongoose = require('mongoose');

var PhotoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true 
	},
	match: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

module.exports = PhotoSchema;
