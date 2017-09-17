'use strict';

describe('Controller: BecomeCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var BecomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BecomeCtrl = $controller('BecomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BecomeCtrl.awesomeThings.length).toBe(3);
  });
});
