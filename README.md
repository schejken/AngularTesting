# angular-test

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## After git-Clone

Type 'npm install' and 'bower install' after git clone is done.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Generators

## Route

Generates a controller and view, and configures a route in app/scripts/app.js connecting them.

Example:

yo angular:route myroute
Produces app/scripts/controllers/myroute.js:

angular.module('myMod').controller('MyrouteCtrl', function ($scope) {
  // ...
});
Produces app/views/myroute.html:

<p>This is the myroute view</p>
Explicitly provide route URI

Example:

yo angular:route myRoute --uri=my/route
Produces controller and view as above and adds a route to app/scripts/app.js with URI my/route

## Controller

Generates a controller in app/scripts/controllers.

Example:

yo angular:controller user
Produces app/scripts/controllers/user.js:

angular.module('myMod').controller('UserCtrl', function ($scope) {
  // ...
});

## Directive

Generates a directive in app/scripts/directives.

Example:

yo angular:directive myDirective
Produces app/scripts/directives/myDirective.js:

angular.module('myMod').directive('myDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the myDirective directive');
    }
  };
});

## Filter

Generates a filter in app/scripts/filters.

Example:

yo angular:filter myFilter
Produces app/scripts/filters/myFilter.js:

angular.module('myMod').filter('myFilter', function () {
  return function (input) {
    return 'myFilter filter:' + input;
  };
});
View

Generates an HTML view file in app/views.

Example:

yo angular:view user
Produces app/views/user.html:

<p>This is the user view</p>

## Service

Generates an AngularJS service.

Example:

yo angular:service myService
Produces app/scripts/services/myService.js:

angular.module('myMod').service('myService', function () {
  // ...
});
You can also do yo angular:factory, yo angular:provider, yo angular:value, and yo angular:constant for other types of services.

## Decorator

Generates an AngularJS service decorator.

Example:

yo angular:decorator serviceName
Produces app/scripts/decorators/serviceNameDecorator.js:

angular.module('myMod').config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // ...
      return $delegate;
    });
  });
