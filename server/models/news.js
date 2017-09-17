var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true 
	},
	info: {
		type: String,
		required: true 
	},
	image: {
		type: String,
		required: false
	},
	list: {
		type: [String],
		required: true
	},
	year: {
		type: String,
		required: false
	},
	video: {
		type: String,
		required: false
	}
});

module.exports = NewsSchema;