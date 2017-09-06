// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:MediaCtrl
//  * @description
//  * # MediaCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('MediaCtrl', function () {
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
    .controller('MediaCtrl', MediaCtrl);

    //all the stuff you want
  MediaCtrl.$inject = ['$scope', 'PhoTo', '$location'];

  function MediaCtrl($scope, PhoTo, $location){
  //example
    var vm = $scope;

    vm.images = PhoTo.getList().$object;

    console.log(vm.images);

  }
})();