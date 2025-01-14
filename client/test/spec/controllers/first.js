'use strict';

describe('Controller: FirstCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var FirstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirstCtrl = $controller('FirstCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FirstCtrl.awesomeThings.length).toBe(3);
  });
});
