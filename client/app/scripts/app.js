'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('yoApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'movieEdit'
      })
      .when('/peopleT', {
        templateUrl: 'views/peoplet.html',
        controller: 'PeopletCtrl',
        controllerAs: 'peopleT'
      })
      .when('/image', {
        templateUrl: 'views/image.html',
        controller: 'ImageCtrl',
        controllerAs: 'image'
      })
      .when('/movie/person/:id', {
        templateUrl: 'views/movie-person.html',
        controller: 'MoviePersonCtrl',
        controllerAs: 'moviePerson'
      })
      .when('/team-page', {
        templateUrl: 'views/team-page.html',
        controller: 'TeamPageCtrl',
        controllerAs: 'teamPage'
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .when('/people/:id', {
        templateUrl: 'views/people-view.html',
        controller: 'PeopleViewCtrl',
        controllerAs: 'peopleView'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl',
        controllerAs: 'media'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl',
        controllerAs: 'resources'
      })
      .when('/first', {
        templateUrl: 'views/first.html',
        controller: 'FirstCtrl',
        controllerAs: 'first'
      })
      .when('/robot', {
        templateUrl: 'views/robot.html',
        controller: 'RobotCtrl',
        controllerAs: 'robot'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/reach', {
        templateUrl: 'views/reach.html',
        controller: 'ReachCtrl',
        controllerAs: 'reach'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

//==========more than anything this hooks up to db===

  //Movie setup
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields ({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    //swang is the added part of localhost:3000's url
    //swang is what chooses our page
    return MovieRestangular.service('swang');
  })
  //People setup
  .factory('PeopleRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields ({
        id: '_id'
      });
    });
  })
  .factory('People', function(PeopleRestangular) {
    return PeopleRestangular.service('people');
  })

  // $scope.myStyle = {
  //   "width": "900px"
  // };
  //image setup

