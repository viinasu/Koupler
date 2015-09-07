angular.module('koupler.activities', [])

.controller('ActivityPickerCtrl', function($scope, Activities) {
  //extend the scope with the factory
  angular.extend($scope, Activities);
})
