// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:MovieAddCtrl
//  * @description
//  * # MovieAddCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('MovieAddCtrl', function (
//   	$scope,
//   	Movie,
//   	$location
//   	) {
//     $scope.movie = {};
//     $scope.saveMovie = function() {
//     	Movie.post($scope.movie).then(function() {
//     		$location.path('/movies');
//     	});
//     }
//   });

(function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('MovieAddCtrl', MovieAddCtrl);

  MovieAddCtrl.$inject = ['$scope', 'Movie', '$location'];

  function MovieAddCtrl($scope, Movie, $location){
    var vm = $scope;

    vm.movie = {};

    vm.saveMovie = saveMovie;

    function saveMovie() {
      Movie.post(vm.movie).then(function() {
        $location.path('/movies');
      });
    }
  }
})();
