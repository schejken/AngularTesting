'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:TestsiteCtrl
 * @description
 * # TestsiteCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('TestsiteCtrl', function ($scope, ngDialog) {
    $scope.pageClass = "page-testsite";
    var vm = this;
    vm.totals = [];
    
    vm.addTotals = function (theName) {
      vm.totals.push(theName);
      vm.theName = "";
    };
    
    vm.value1 = 12312;
    vm.value2 = 3234;
    
    vm.theObject = [
    {
      'Value1': vm.value1,
      'Value2': vm.value2  
    },
    { 
      "Value3": vm.value1,
      "Value4": vm.value2  
    },
    {
      "Value5": vm.value1,
      "Value6": vm.value2  
    }
    ];
    
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    vm.openDialog = function () {
      ngDialog.open({
        template: "templates/thedialog.html",
        className: "ngdialog-theme-default"
      });
    };
  });