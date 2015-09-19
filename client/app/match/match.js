angular.module('koupler.match', [])

//ctrl name changed from useCtrl to couplesCtrl
.controller('MatchCtrl', ['$scope', '$http', 'AuthTokenFactory', function($scope, $http, AuthTokenFactory) {
  var token = AuthTokenFactory.getToken();

  $http({
    url: '/activities/match',
    method: 'GET',
    params: {
      token: token
    }
  }).then(
    function(response) {
      $scope.data = response.data.couple;
    }
  );
}
]);
