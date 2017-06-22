'use strict';

describe('Controller: PeopletCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var PeopletCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopletCtrl = $controller('PeopletCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PeopletCtrl.awesomeThings.length).toBe(3);
  });
});
