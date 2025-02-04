'use strict';

describe('Controller: ReachCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var ReachCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReachCtrl = $controller('ReachCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReachCtrl.awesomeThings.length).toBe(3);
  });
});
