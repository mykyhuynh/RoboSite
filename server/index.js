var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var Grid =  require('gridfs-stream');
let conn = mongoose.connection;
var path = require('path');
var fs = require('fs');
const fileUpload = require('express-fileupload');

//create application
var app = express();

//Middlware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Overide'));
app.use(fileUpload());

//CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
	next();
});

//path for image going to GFS
var imagePath = path.join(__dirname, 'forest.jpg');

//Grid and mongo connection
Grid.mongo = mongoose.mongo;

//mongo connection
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {

	//Load modules
	app.models = require('./models/index');

	//get image
	app.get('/image/:_id', function(req, res){ 
        gfs = Grid(conn.db);
        var readstream = gfs.createReadStream({_id: req.params._id}); 
        readstream.on("error", function(err){
            res.send("No image found with that title"); 
        });
        let final = res;
        let object = [
        	final
        ];
        readstream.pipe(final);
    });

     app.post('/img', (req, res) => {
     	let gfs = Grid(conn.db);
        let part = req.files.file;
        let writeStream = gfs.createWriteStream({
            filename: 'img_' + part.name,
            mode: 'w',
            content_type: part.mimetype
        });

        writeStream.on('close', (file) => {
            return res.status(200).send({
                message: 'Success',
                file: file
            });
        });
        writeStream.write(part.data);
        writeStream.end();
    });

       app.get('/img/:imgname', (req, res) => {
       	let gfs = Grid(conn.db);
        gfs.files.find({
            filename: req.params.imgname
        }).toArray((err, files) => {

            if (files.length === 0) {
                return res.status(400).send({
                    message: 'File not found'
                });
            }
            let data = [];
            let readstream = gfs.createReadStream({
                filename: files[0].filename
            });

            readstream.on('data', (chunk) => {
                data.push(chunk);
            });

            readstream.on('end', () => {
                data = Buffer.concat(data);
                let img = 'data:image/png;base64,' + Buffer(data).toString('base64');
                fs.writeFileSync("example.jpg", img);
                res.end(img);
            });

            readstream.on('error', (err) => {
                console.log('An error occurred!', err);
                throw err;
            });
        });
    });

	//Load routes
	var routes = require('./routes');
	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
	});

	// //Grid fs connection for large files
	// var gfs = Grid(mongoose.connection.db);

	// //create a write stream with the name to store the file in the db
	// var writeStream = gfs.createWriteStream({
	// 	filename: 'image'
	// });

	// fs.createReadStream(imagePath).pipe(writeStream);

	// writeStream.on('close', function (file) {
	// 	console.log(file.filename + 'Written to DB');
	// });

	console.log('Listening on port 3000....');
	app.listen(3000);
});

