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


    var urls = [];

    vm.setUrl = function (value) {
      return $sce.trustAsResourceUrl(value);
    }


    vm.pushDomain = function (value) {
          urls.push({domain: $sce.trustAsResourceUrl(value)});
    }

        vm.deleteDomain = function (value) {
          urls.splice({domain: (value)});
    }
    
    // urls.push({domain: $sce.trustAsResourceUrl("https://www.youtube.com/embed/O0EkhUnDuG0?rel=0")});
    
    $scope.urls = urls;
    
    vm.testAlert = function (value) {
        alert(value);
    }

    vm.myIndex = function() {
      var index = -1;
      index++;
      console.log(index);
    }

    console.log(urls);


//     $scope.hasRole = function(role){
//      var indexOfRole = $scope.roles.indexOf(role); // or whatever your object is instead of $scope.roles
//      if (indexOfRole === -1)
//           return false;
//      else
//           return true;
// }

     // console.log(movieObject);


     // vm.news = {};
     // News.one($routeParams.id).get().then(function(news) {
     //    vm.news = news;
     //    vm.saveNews = function(value) {
     //      var foo = $sce.trustAsResourceUrl(value);
     //      $scope.news.save().then(function() {
     //        $location.path('/news/' + routeParams.id);
     //      })
     //    }
     // });







  }
})();