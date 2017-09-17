var restful = require('node-restful');

module.exports = function(app, route) {
	//setup controller for REST
	var rest = restful.model(
		'image',
		app.models.image
		).methods(['get', 'put', 'post', 'delete']);

	//register application
	rest.register(app, route);

	//return middleware
	return function(req, res, next) {
		next();
	};
};