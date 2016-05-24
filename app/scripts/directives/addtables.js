'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:addTables
 * @description
 * # addTables
 */
angular.module('angularTestApp')
  .directive('addTables', function () {
    return {
      templateUrl: 'templates/table.html',
      restrict: 'E'
    };
  });
