// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:PhotoCtrl
//  * @description
//  * # PhotoCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('PhotoCtrl', function () {
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
    .controller('PhotoCtrl', PhotoCtrl);

    //all the stuff you want
  PhotoCtrl.$inject = ['$scope', 'Photo', '$location'];

  function PhotoCtrl($scope, Photo, $location){
  //example
    var vm = $scope;

    vm.images = Photo.getList().$object;

    console.log(images);

  }
})();