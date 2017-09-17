// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:TeamPageCtrl
//  * @description
//  * # TeamPageCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('TeamPageCtrl', function () {
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
    .controller('TeamPageCtrl', TeamPageCtrl);

    //all the stuff you want
  TeamPageCtrl.$inject = ['$scope', 'Movie', 'People', 'News'];

  function TeamPageCtrl($scope, Movie, People, News){
  //example
    var vm = $scope;

    vm.movie = {};

    vm.saveMovie = saveMovie;

    function saveMovie() {
      Movie.post(vm.movie).then(function() {
        $location.path('/movies');
      });
    }

    //mentor stuff
	vm.movieObject = Movie.getList().$object;
	console.log(vm.movieObject);

	//student stuff
	vm.peopleObject = People.getList().$object;

  vm.newsObject = People.getList().$object;

  }
})();