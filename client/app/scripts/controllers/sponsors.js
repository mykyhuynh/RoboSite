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

    vm.golds = [
        {image: 'bc.jpeg', description: 'Image 00'},
        {image: 'ci.jpeg', description: 'Image 01'},
        {image: 'if.png', description: 'Image 04'},
        {image: 'rr.png', description: 'Image 02'},
        {image: 'wj.png', description: 'Image 03'},
        {image: 'ycc.jpeg', description: 'Image 05'}
    ]

    vm.Sponsors = [
        {image: 'pp.jpg', description: 'Image 00'}
    ]

    
  }
})();
