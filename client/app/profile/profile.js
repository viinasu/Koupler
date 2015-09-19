angular.module('koupler.profile', [
  'ui.bootstrap'
  ])

.controller('ProfileCtrl', function($scope, $state, $http, Activities, AuthTokenFactory, Upload) {
  var vm = this;
  //placeholder for POST request until routeParam is set up
  vm.username = $state.params.username;

<<<<<<< HEAD
  vm.isAuthorized = true;

  vm.testUser = {
    username: 'testUser',
    contactInfo: {
      name1: 'Boozer',
      name2: 'Woof',
      email: 'woof@bark.com',
      phone: 7465746374
    },
    profilePic: 'http://www.qykapp.com/article/content/images/2015/06/dog-1-1.jpg',
    activities: ['eating human food', 'playing catch', 'pooping', 'hunting squirrels', 'getting into the trash', 'chasing cats', 'cuddling'],
    profileInfo: {
      'About Us': "We're a fun-loving couple of scruffy pups looking to go on a dog date."
    }
  };

=======
>>>>>>> (update) now gets profileInfo on profile load, and authorizes user to edit profile if token matches profile params
  vm.goToActivities = function() {
    $state.go('activities');
  };

  vm.profileData = {};

  vm.getProfileInfo = function() {
    var token = AuthTokenFactory.getToken();
    console.log(token);
    //GET request should respond with user's profile picture, interests, about, memories, etc.
    $http.get('/profile/' + vm.username)
      .then(function(response) {
        if (response.data[0].isAuthorizedToEdit) {
          vm.isAuthorizedToEdit = true;
        };
        console.log("getProfileInfo:", response.data);
        vm.profileData = response.data[0];
      });
  };

  vm.getProfileInfo();

  // vm.showEditModal = function() {

  // }

  var editModal = $modal.open({
    animation: $scope.animationsEnabled,
    templateUrl: 'myModalContent.html',
    controller: 'ModalInstanceCtrl',
    size: size,
    resolve: {
      items: function () {
        return $scope.items;
      }
    }
  });

  vm.uploadFiles = function(file) {
    vm.f = file;
    if (file && !file.$error) {
      file.upload = Upload.upload({
        url: '/profile/' + vm.username + '/pic',
        file: file,
        method: 'POST'
      });

      file.upload.then(function(response) {
        //should send back src url for img
      }, function(response) {
        vm.errorMsg = response.status;
      });
    }
  };

  vm.chatInit = function(receiver) {
    if(!$scope.openConversation) {
      $scope.openConversation = true; 
    }
    console.log($scope.openConversation);
  }
})
