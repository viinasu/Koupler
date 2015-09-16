angular.module('koupler.profile', [])

.controller('ProfileCtrl', function($scope, $location, $http, Activities, AuthTokenFactory) {

  var vm = this;

  vm.testUser = {
    username: 'testUser',
    contactInfo: {
      name1: 'Boozer',
      name2: 'Woof',
      email: 'woof@bark.com',
      phone: 7465746374
    },
    profilePic: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    activities: ['eating human food', 'playing catch', 'pooping', 'hunting squirrels'],
    profileInfo: {
      'About Us': "We're a fun-loving couple of scruffy pups looking to go on a dog date."
    }
  }

  vm.goToActivities = function() {
    $location.path('/activities');
  };

  vm.profileData = {};

  vm.getProfileInfo = function () {
    var token = AuthTokenFactory.getToken();
    //GET request should respond with user's profile picture, interests, about, memories, etc.
    $http.get('/profile', {token: token})
      .then(function(response) {
        vm.profileData = response.data;
      })
      // .then(function() {
      //   $http.get('profile/memories', function (err, data) {

      //   })
      // })
  };
});