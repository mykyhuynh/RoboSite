'use strict';

describe('Controller: MovieEditCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var MovieEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieEditCtrl = $controller('MovieEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieEditCtrl.awesomeThings.length).toBe(3);
  });
});
