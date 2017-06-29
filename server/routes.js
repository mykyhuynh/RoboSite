//make routes
module.exports = {
	'/swang' : require('./controllers/movieController.js'),
	'/people' : require('./controllers/peopleController.js'),
	'/photo' : require('./controllers/photoController.js')
}