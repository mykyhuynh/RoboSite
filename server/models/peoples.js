var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true 
	},
	favThing: {
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
	imaGe: {
		type: String,
		required: true
	}
});

module.exports = PeopleSchema;