'use strict';

describe('Controller: MovieAddCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var MovieAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieAddCtrl = $controller('MovieAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieAddCtrl.awesomeThings.length).toBe(3);
  });
});
