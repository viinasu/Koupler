angular.module('koupler.factories', [])

.factory('Activities', function($scope, $window, $location, $http) {
  // var activities = [
  //                   {'name': 'Hiking'},
  //                   {'name': 'Dinner'},
  //                   {'name': 'Opera'},
  //                   {'name': 'Dancing'}, 
  //                   {'name': 'Music Show'}
  //                 ];
  // var getActivities = function() {
  //   //make a get request to the server for for all activities in act table
  //     //populate activities array with these
  // };
  // var getCouples = function (activity) {
  //   var token = $window.localStorage.getItem('JWT');
  //   $http.post('/activities/match', {activity: activity, token: token})
  //     .then(function(response) {
  //       console.log('couple sent back by database is ' + response.data.couple);
  //       $window.localStorage.setItem('coupleChosen', response.data.couple); //expected to save chosenCouple in state of the app
  //       $location.path('/match');
  //     }, function(response) {
  //       console.log('sorry, there was an error ', response.statusText);
  //     });
  // };

  // return {
  //   activities: activities,
  //   getActivities: getActivities,
  //   getCouples: getCouples
  // };
});
