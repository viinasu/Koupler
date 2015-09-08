angular.module('koupler', [
  'koupler.factories',
  'koupler.activities',
  'koupler.auth',
  'koupler.couples',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/homepage.html',
      controller: 'AuthCtrl'
    })
    .when('/activities', {
      templateUrl: 'app/activityPickerCtrl/activityPicker.html',
      controller: 'ActivityPickerCtrl',
      authenticate: true,
    })
    .when('/match', {
      templateUrl: 'app/activityPickerCtrl/match.html',
      controller: 'CouplesCtrl',
      authenticate: true,
    })
    .otherwise({
      redirectTo: '/'
    });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
})
.run(function($rootScope, $location, AuthTokenFactory) {
  $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !AuthTokenFactory.isAuth()) {
      $location.path('/');
    }
  });
});
