angular.module('koupler.profile', [])

.controller('ProfileCtrl', function($scope, $location, $http, Activities, AuthTokenFactory) {

  var vm = this;

  vm.activities = Activities.getActivities();

  vm.profileData = {};

  vm.getProfileInfo = function () {
    var token = AuthTokenFactory.getToken();

    //GET request should respond with user's profile picture, interests, about, memories, etc.
    $http.get('/profile', {token: token})
      .then(function(response) {
        vm.profileData = response.data;
      });
  };
});