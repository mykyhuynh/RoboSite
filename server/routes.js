//make routes
module.exports = {
	'/swang' : require('./controllers/movieController.js'),
	'/people' : require('./controllers/peopleController.js'),
	'/photos' : require('./controllers/photoController.js')
}