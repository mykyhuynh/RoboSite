'use strict';

describe('Controller: SeasonsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var SeasonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeasonsCtrl = $controller('SeasonsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeasonsCtrl.awesomeThings.length).toBe(3);
  });
});
