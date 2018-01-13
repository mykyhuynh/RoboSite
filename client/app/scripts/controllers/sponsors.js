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
        {image: 'cgr.jpg', description: 'Chip Ganassi'},
        {image: 'ptef.png', description: 'Pike Education Foundation'},
        {image: 'ci.jpeg', description: 'Color Inc'},
        {image: 'ISG.jpg', description: 'Indiana Space Grant'},
        {image: 'white.jpg', description: 'filler image'},
        {image: 'ni.png', description: 'National Instruments'}
    ]

    vm.silvers = [
      {image: 'UPSH.JPG', description: 'UPS'},
      {image: 'gp.jpg', description: 'Game Point'}


    ]

    vm.plat = [
      {image: 'ac.jpg', description: 'Abbot'},
      {image: 'bc.jpeg', description: 'Beckman Couylter'},
      {image: 'dow.jpg', description: 'Dow'},
      {image: 'wj.png', description: 'Water Jet Cutting Inc'}
    ]

    vm.titles = [
        {image: '3m.jpg', description: '3M'},
        {image: 'rr.png', description: 'Rolls Royce'},
        {image: 'ycc.jpeg', description: 'YCC'}
    ]

    vm.Sponsors = [
        {image: 'pp.jpg', description: 'Image 00'}
    ]

    
  }
})();
