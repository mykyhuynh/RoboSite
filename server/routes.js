//make routes
module.exports = {
	'/swang' : require('./controllers/movieController.js'),
	'/people' : require('./controllers/peopleController.js'),
	'/photo' : require('./controllers/photoController.js'),
	'/news' : require('./controllers/newsController.js'),
	'/image' : require('./controllers/imageController.js')

	// '/image' : require('./controllers/imageController.js')
}