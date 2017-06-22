// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:SponsorsCtrl
//  * @description
//  * # SponsorsCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('SponsorsCtrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

  (function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('SponsorsCtrl', SponsorsCtrl);

    //all the stuff you want
  SponsorsCtrl.$inject = ['$scope'];

  function SponsorsCtrl($scope){
  //example
    var vm = $scope;

    
  }
})();
