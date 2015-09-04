// This controller is responsible for client side authentication in the 
//signup/signin form using the injected Auth service. 

angular.module('koupler.auth', [])

.controller('AuthCtrl', function ($scope, $window, $location, Auth){

  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
        .then(function (token){
          $window.localStorage.setItem('JOT', token);
          $location.path('/activities');
        })
        .catch(function (err){
          console.error(err);
        });
  };
 
  $scope.signup = function () {
    Auth.signup($scope.user)
        .then(function (token){
          $window.localStorage.setItem('JOT', token);
          $location.path('/activities');
        })
        .catch(function (err){
          console.error(err);
        });
  };

})