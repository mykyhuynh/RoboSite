var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({	
	photo: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true		
	}
});

module.exports = photoSchema;
