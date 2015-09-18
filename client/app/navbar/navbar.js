angular.module("koupler").directive("navBar", ['$window', '$state', function($window, $state) {
  return {
    restrict: 'E',
    templateUrl: 'app/navbar/navbar.html',
    link: function(scope, elem, attrs) {
      /*
      The below methods are used to modify the navbar routes available to a
      specific user based on their privilege and current url path
      */

      //**"at" methods return true if the user is currently at that view
      scope.atProfileView = function() {
        var path = $state.current.name;
        if (path.match(/^profile/) !== null) {
          return true;
        }
        return false;
      };

      scope.atActivitiesView = function() {
        var path = $state.current.name;
        if (path.match(/^activities/) !== null) {
          return true;
        }
        return false;
      };

      scope.atHomeView = function() {
        if ($state.current.name === '') {
          return true;
        }
        return false;
      };

      scope.goToActivities = function() {
        $state.go('activities');
      };

      scope.goToProfile = function() {
        $state.go('profile');
      };

      scope.goToHome = function() {
        $state.go('');
      };

      //returns true if user is logged in to either profile or dash view
      scope.loggedIn = function() {
        return scope.atProfileView() || scope.atActivitiesView();
      };

    }
  };
}]);

// angular.module("koupler").directive("navBar", ['$window', '$location', '$routeParams', function($window, $location, $routeParams) {
//   return {
//     restrict: 'E',
//     templateUrl: 'app/navbar/navbar.html',
//     link: function(scope, elem, attrs) {
//       /*
//       The below methods are used to modify the navbar routes available to a
//       specific user based on their privilege and current url path
//       */

//       //**"at" methods return true if the user is currently at that view
//       scope.atProfileView = function() {
//         var path = $location.$$path.slice(1);
//         if (path.match(/^profile/) !== null) {
//           return true;
//         }
//         return false;
//       };

//       scope.atActivitiesView = function() {
//         var path = $location.$$path.slice(1);
//         if (path.match(/^activities/) !== null) {
//           return true;
//         }
//         return false;
//       };

//       scope.atHomeView = function() {
//         if ($location.$$path === '/') {
//           return true;
//         }
//         return false;
//       };

//       scope.goToActivities = function() {
//         $location.path('/activities');
//       };

//       scope.goToProfile = function() {
//         $location.path('/profile');
//       };

//       scope.goToHome = function() {
//         $location.path('/');
//       };

//       //returns true if user is logged in to either profile or dash view
//       scope.loggedIn = function() {
//         return scope.atProfileView() || scope.atActivitiesView();
//       };

//     }
//   };
// }]);

