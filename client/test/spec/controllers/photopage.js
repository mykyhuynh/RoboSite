'use strict';

describe('Controller: PhotopageCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var PhotopageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotopageCtrl = $controller('PhotopageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotopageCtrl.awesomeThings.length).toBe(3);
  });
});
