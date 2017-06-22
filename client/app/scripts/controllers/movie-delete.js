'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('MovieDeleteCtrl', function (
  	$scope,
  	$routeParams,
  	Movie,
  	$location
  	) {
    $scope.movie = Movie.one($routeParams.id).get().$object;
    $scope.deleteMovie = function() {
    	$scope.movie.remove().then(function() {
    		location.path('/movies');
    	});
    };
    $scope.back = function() {
    	$location.path('/movie/' + $routeParams.id)
    };
  });
