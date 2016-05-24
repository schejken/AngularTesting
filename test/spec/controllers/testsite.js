'use strict';

describe('Controller: TestsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var TestsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestsiteCtrl = $controller('TestsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestsiteCtrl.awesomeThings.length).toBe(3);
  });
});
