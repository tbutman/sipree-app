angular.module('SipreeApp.controllers.Navbar', ['SipreeApp.services.Login'])

.controller('NavbarController', ['$scope', '$location', 'AuthFactory', function($scope, $location, AuthFactory){
  $scope.loggedIn = false;

  $scope.getAuthState = function(){
    $scope.loggedIn = AuthFactory.getAuthState();
  };

  $scope.logout = function(){
    console.log('click')
    AuthFactory.logout();
    $location.path('/login');
  };

// watch for login changes to toggle navbar button visibility
  $scope.$watch(function(){
    return AuthFactory.getAuthState();
  },
  function(newValue){
    $scope.loggedIn = newValue;
  });

}]);