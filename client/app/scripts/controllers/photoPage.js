(function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('PhotopageCtrl', PhotopageCtrl);

    //all the stuff you want
  PhotopageCtrl.$inject = ['$scope', '$location', '$routeParams', 'PhoTo'];

  function PhotopageCtrl($scope, $location, $routeParams, PhoTo){
  //example
    var vm = $scope;

    vm.movie = {};

    vm.event = ($routeParams.match);

    vm.photoObject = PhoTo.getList({match: vm.event}).$object;

    vm.getDots = function() {



      var foo = (Object.keys(vm.photoObject).length);
      console.log(foo);
      console.log('yur mom');
    }

    //     $scope.getPrizes = function () {
    //    console.log ("GetPrizes");
    //     console.log($scope.photoObject);



    //     return $scope.photoObject; //PrizeService.getCurrentWeekList();
    // };

  }
})();