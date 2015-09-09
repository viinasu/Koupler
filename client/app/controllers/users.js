angular.module('koupler.couples',[])

//ctrl name changed from useCtrl to couplesCtrl
.controller('CouplesCtrl', function($scope, $http, AuthTokenFactory) {
  var token = AuthTokenFactory.getToken();

  $http({
      url: '/activities/match'
    , method: 'GET'
    , params: {token: token}
  }).then(
    function(response) {
      $scope.data = response.data.couple;
    }
  );
});