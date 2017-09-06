//make routes
module.exports = {
	'/swang' : require('./controllers/movieController.js'),
	'/people' : require('./controllers/peopleController.js'),
	'/photo' : require('./controllers/photoController.js')
	// '/image' : require('./controllers/imageController.js')
}