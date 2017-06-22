'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:PeopletCtrl
 * @description
 * # PeopletCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('PeopletCtrl', function ($scope, People) {
    $scope.peopleObject = People.getList().$object;
  });
