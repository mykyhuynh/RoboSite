// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:SeasonsCtrl
//  * @description
//  * # SeasonsCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('SeasonsCtrl', function () {
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
    .controller('SeasonsCtrl', SeasonsCtrl);

  SeasonsCtrl.$inject = ['$scope', 'News', '$sce'];

  function SeasonsCtrl($scope, News, $sce){
    var vm = $scope;

    // let movieObject = vm.movieObject;

     vm.newsObject = News.getList().$object;

     vm.setUrl = setUrl;
     var foo = "";
     var string = "";

     function setUrl(foo) {
     	string = $sce.trustAsResourceUrl(foo);
     	return string;
     }

     // console.log(movieObject);

  }
})();