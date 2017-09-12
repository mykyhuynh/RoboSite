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
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/peopleT', {
        templateUrl: 'views/peoplet.html',
        controller: 'PeopletCtrl',
        controllerAs: 'peopleT'
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Photo', {
        templateUrl: 'views/media/photo.html',
        controller: 'PhotoCtrl',
        controllerAs: 'Photo'
      })
      .when('/seasons', {
        templateUrl: 'views/seasons.html',
        controller: 'SeasonsCtrl',
        controllerAs: 'seasons'
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


  //Photo setup
    .factory('PhotoRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields ({
        id: '_id'
      });
    });
  })
  .factory('PhoTo', function(PhotoRestangular) {
    return PhotoRestangular.service('photo');
  })

  // $scope.myStyle = {
  //   "width": "900px"
  // };
  //image setup

