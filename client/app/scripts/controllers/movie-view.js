'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('MovieViewCtrl', function (
  	$scope,
  	$routeParams,
  	Movie
  	) {
    $scope.viewMovie = true;
    $scope.movie = Movie.one($routeParams.id).get().$object;
  });


