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
      .when('/movies', {
        templateUrl: 'views/team-page/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/movie/:id', {
        templateUrl: 'views/team-page/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/peopleT', {
        templateUrl: 'views/team-page/peoplet.html',
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
        templateUrl: 'views/team-page/first.html',
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
      .when('/Photo', {
        templateUrl: 'views/media/photo.html',
        controller: 'PhotoCtrl',
        controllerAs: 'Photo'
      })
      .when('/seasons', {
        templateUrl: 'views/seasons/2016-17/seasons.html',
        controller: 'SeasonsCtrl',
        controllerAs: 'seasons'
      })
      .when('/2017-2018', {
        templateUrl: 'views/seasons/2017-18/seasons.html',
        controller: 'SeasonsCtrl',
        controllerAs: 'seasons'
      })
      .when('/become', {
        templateUrl: 'views/become.html',
        controller: 'BecomeCtrl',
        controllerAs: 'become'
      })
      .when('/events', {
        templateUrl: 'views/team-page/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      // .when('/photoPage/:match', {
      //   templateUrl: 'views/media/photoPage.html',
      //   controller: 'PPageCtrl',
      //   controllerAs: 'ppage'
      // })
      .when('/photo/:match', {
        templateUrl: 'views/media/photopage.html',
        controller: 'PhotopageCtrl',
        controllerAs: 'photoPage'
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


    //Photo setup
    .factory('NewsRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields ({
        id: '_id'
      });
    });
  })
  .factory('News', function(NewsRestangular) {
    return NewsRestangular.service('news');
  })

  // $scope.myStyle = {
  //   "width": "900px"
  // };
  //image setup

