var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: false
	},
	team: {
		type: String,
		required: true
	},
	why: {
		type: String,
		required: false
	},
	mom: {
		type: String,
		required: false
	},
	image: {
		type: Schema.Types.ObjectId, 
		ref: "fs.files",
		required: [true, 'No image id found']
	},
	// people: {
	// 	sports: {
	// 		type: String,
	// 		required: true
	// 	},
	// 	good: {
	// 		type: String,
	// 	required: true
	// 	}
	// }
	student: {
		names: []
	}
});

//exportable
module.exports = MovieSchema;

