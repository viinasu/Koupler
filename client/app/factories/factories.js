angular.module('koupler.services', [])

.factory('Activities', function($http) {
  var activities = [
                    'Hiking',
                    'Dinner',
                    'Opera',
                    'Dancing', 
                    'Music Show'
                  ];
  var getCouples = function (activity) {
    //need to ask the server
    //to ask the database
    //for all of the couples table
    //and all of the couples/activities table
  };

  return {
    activities: activities,
    getCouples: getCouples
  }
})