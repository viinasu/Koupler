angular.module('koupler.couples',[])

//ctrl name changed from useCtrl to couplesCtrl
.controller('CouplesCtrl', function($scope, $window){
 $scope.data = {};
 $scope.coupleName = $window.localStorage.getItem('coupleUsername');
 $scope.data.name = $window.localStorage.getItem('coupleFirstName1')
                     + ' & ' 
                     +  $window.localStorage.getItem('coupleFirstName2');
 $scope.data.email =  $window.localStorage.getItem('email');
 $scope.data.phone =  $window.localStorage.getItem('phone');
 $scope.data.photo =  $window.localStorage.getItem('photo');
 console.log('photo file path', $scope.data.photo);

 $scope.getCouple = function(){
   // console.log($window.localStorage.getItem('coupleUsername'));
   // $scope.coupleName = $window.localStorage.getItem('coupleUsername');
   // $scope.data.name = $window.localStorage.getItem('coupleFirstName1');
   //                     + ' & ' 
   //                     + matchedCouple.person_2_first_name;
   // $scope.data.email = matchedCouple.email;
   // $scope.data.phone = matchedCouple.phone;
 };

 // $scope.getCouple();
});