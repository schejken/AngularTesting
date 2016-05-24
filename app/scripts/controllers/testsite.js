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
    var vm = this;
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