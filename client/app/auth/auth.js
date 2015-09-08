// This controller is responsible for client side authentication in the 
//signup/signin form using the injected AuthTokenFactory service. 
angular.module('koupler.auth', [])

.controller('AuthCtrl', function ($scope, $http, $window, $location, AuthTokenFactory){
      
  var user = {};
  //To Do add post request handlers to factories.js 
  $scope.signin = function() {
    $http.post('/couples/signin', {
        username: $scope.usernameSignIn, 
        password: $scope.passwordSignIn
      })
      .then(function (response) {
        AuthTokenFactory.setToken(response.data.token);
        $location.path('/activities');
      }, 
      function(err){
        console.log(err);
      });
  };

  $scope.signup = function() {
    $http.post('/couples/signup', {
        username: $scope.usernameSignup, 
        password: $scope.passwordSignup,
        firstName1: $scope.firstName1Signup,
        lastName1: $scope.lastName1Signup,
        firstName2: $scope.firstName2Signup,
        lastName2: $scope.lastName2Signup,
        email: $scope.emailSignup,
        phoneNumber: $scope.phoneNumberSignup
      })
      .then(function(response) {
        AuthTokenFactory.setToken(response.data.token);
        console.log('the token from auth controller is ', response.data.token);
        console.log('the decoded from auth controller is ', response.data.decoded);
        $location.path('/activities');
      }, 
      function(err){
        console.log(err);
      });
  };

  $scope.signout = function() {
    AuthTokenFactory.setToken();
  };

})

.factory('AuthTokenFactory', function($window) {
  var key = 'JWT';

  return {
    getToken: getToken,
    setToken: setToken,
    isAuth: isAuth
  };

  function getToken(){
    return $window.localStorage.getItem(key);
  }

  function setToken(token){
    if(token){
      $window.localStorage.setItem(key, token)
    } else {
      $window.localStorage.removeItem(key);
    }
  }

  function isAuth(){
    return !! $window.localStorage.getItem(key);
  }
});