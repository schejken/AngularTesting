'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/testSite', {
        templateUrl: 'views/testsite.html',
        controller: 'TestsiteCtrl',
        controllerAs: 'vm'
      })
      .when('/AngularNavTest', {
        templateUrl: 'views/angularnavtest.html',
        controller: 'AngularnavtestCtrl',
        controllerAs: 'vm'
      })
      .when('/Animations', {
        templateUrl: 'views/animations.html',
        controller: 'AnimationsCtrl',
        controllerAs: 'Animations'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
