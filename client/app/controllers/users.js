angular.module('koupler.couples',[])

.controller('userCtrl', function($scope, usersFactory){
  $scope.data = {};
  $scope.getDetails = function(){
    Users.getAllUsersDetails()
         .then(function(deets){
          //TODO: map out the response from the server
            $scope.data.deet1 = deets.deet1;
            $scope.data.deet2 = deets.deet2;
            $scope.data.deet3 = deets.deet3;
         })
         .catch(function(error){
            console.error(error);
         })
  }
  $scope.getDetails();
});
