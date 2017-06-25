// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:MoviesCtrl
//  * @description
//  * # MoviesCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('MoviesCtrl', function ($scope, Movie) {
//     $scope.movieObject = Movie.getList().$object;
//  //    $scope.getImage = function() {
//  //    	Movie.get($scope.movie.image, function(req, res) {
//  //    var Grid =  require('gridfs-stream');
// 	// let conn = mongoose.connection;
// 	// var path = require('path');
// 	// var fs = require('fs');
//  //    		Grid.mongo = mongoose.mongo;
//  //    		gfs = Grid(conn.db);
// 	//     	var readstream = gfs.createReadStream({_id: req.params._id}); 
// 	//         readstream.on("error", function(err){
// 	//             res.send("No image found with that title"); 
// 	//         });
//  //        let final = res;
//  //        readstream.pipe(final);
//  //    	});
//  //    }
//   });

(function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('MoviesCtrl', MoviesCtrl);

  MoviesCtrl.$inject = ['$scope', 'Movie'];

  function MoviesCtrl($scope, Movie){
    var vm = $scope;

    // let movieObject = vm.movieObject;

     vm.movieObject = Movie.getList().$object;

     console.log(movieObject);

     vm.mentors = [
        {image: 'sliderImage2.png', description: 'Image 00'},
        {image: 'slideImage1.jpg', description: 'Image 01'},
        {image: 'sliderImage3.png', description: 'Image 02'},
        {image: 'images/b2.jpg', description: 'Image 03'}
    ];

  }
})();






