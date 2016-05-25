'use strict';

describe('Controller: AngularnavtestCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var AngularnavtestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularnavtestCtrl = $controller('AngularnavtestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AngularnavtestCtrl.awesomeThings.length).toBe(3);
  });
});
