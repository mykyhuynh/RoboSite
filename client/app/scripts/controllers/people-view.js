'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:PeopleViewCtrl
 * @description
 * # PeopleViewCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('PeopleViewCtrl', function ( 
    $scope,
  	$routeParams,
  	People
  	) {
    $scope.viewPeople = true;
    $scope.people = People.one($routeParams.id).get().$object;
  });
