angular.module('koupler.profile')

.controller('ChatCtrl', ['$scope','socket',function($scope, socket){
  var vm = this;
  vm.openChatBox = false;

  vm.openClose = function() {
    if(vm.openChatBox) {
      vm.openChatBox = true;
    }
    else {
      vm.openChatBox = false;
    }
  }

}]);