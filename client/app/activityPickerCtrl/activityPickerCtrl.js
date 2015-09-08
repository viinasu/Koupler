angular.module('koupler.activities', [])

.controller('ActivityPickerCtrl', function($scope, $window, $location, $http/*, Activities*/) {
  //extend the scope with the factory
  // angular.extend($scope, Activities);
  $scope.activities = [
                    {'name': 'Hiking'},
                    {'name': 'Dinner'},
                    {'name': 'Opera'},
                    {'name': 'Dancing'}, 
                    {'name': 'Music Show'}
                  ];
  $scope.getActivities = function() {
    //make a get request to the server for for all activities in act table
      //populate activities array with these
  };
  $scope.getCouples = function (activity) {
    var token = $window.localStorage.getItem('JWT');
    $http.post('/activities/match', {activity: activity, token: token})
      .then(function(response) {
        var couple = response.data.couple;
        // console.log(couple);
        console.log(couple.username);
        $window.localStorage.setItem('coupleUsername', couple.username); //expected to save chosenCouple in state of the app
        $window.localStorage.setItem('coupleFirstName1', couple.person_1_first_name);
        $window.localStorage.setItem('coupleFirstName2', couple.person_2_first_name);
        $window.localStorage.setItem('email', couple.email);
        $window.localStorage.setItem('phone', couple.phone);
        $window.localStorage.setItem('photo', couple.photo_filepath);
        // $window.localStorage.setItem('coupleChosen', couple);
        // $window.localStorage.setItem('coupleChosen', couple);
        // $window.localStorage.setItem('coupleChosen', couple);
        $location.path('/match');
      }, function(response) {
        console.log('sorry, there was an error ', response.statusText);
      });
  };
})
