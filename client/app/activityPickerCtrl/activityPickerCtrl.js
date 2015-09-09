angular.module('koupler.activities', [])

.controller('ActivityPickerCtrl', function($scope, $location, $http, Activities, AuthTokenFactory) {
  $scope.activities = Activities.getActivities();

  $scope.postActivity = function (activity) {
    var token = AuthTokenFactory.getToken();

    $http.post('/activities/match', {activity: activity, token: token})
      .then(function(response) {
        $location.path('/match');
      });
  };
});
