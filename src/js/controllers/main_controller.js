angular.module('SipreeApp.controllers.Main', ['SipreeApp.services.Login'])

.controller('MainController', ['$scope', '$location', 'AuthFactory', function($scope, $location, AuthFactory){
  $scope.loggedIn = false;

// if login status changes, redirect to appropriate page
  $scope.$watch(function(){
    return AuthFactory.getAuthState();
  },
  function(newValue){
    $scope.loggedIn = newValue;
    if(!$scope.loggedIn){
      $location.path('/login');
    }
    else {
      $location.path('/');
    }
  });

}]);