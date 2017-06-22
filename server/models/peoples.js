var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true 
	}
});

module.exports = PeopleSchema;