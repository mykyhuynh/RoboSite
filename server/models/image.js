// var mongoose = require('mongoose');
// var Grid =  require('gridfs-stream');
// let conn = mongoose.connection;
// var path = require('path');
// var fs = require('fs');

    //  app.post('/img', (req, res) => {
    //  	let gfs = Grid(conn.db);
    //     let part = req.files.file;
    //     let writeStream = gfs.createWriteStream({
    //         filename: 'img_' + part.name,
    //         mode: 'w',
    //         content_type: part.mimetype
    //     });

    //     writeStream.on('close', (file) => {
    //         return res.status(200).send({
    //             message: 'Success',
    //             file: file

    //         });
    //     });

    //     writeStream.write(part.data);

    //     writeStream.end();
    // });


