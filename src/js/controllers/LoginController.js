angular.module('SipreeApp.controllers.Login', ['SipreeApp.services.Login'])

.controller('LoginController', ['$scope', '$location', 'AuthFactory', function($scope, $location, AuthFactory){
  $scope.loginError = false;

  $scope.login = function(){
    var credentials = {
      email: $scope.email,
      password: $scope.password
    };

    AuthFactory.login(credentials, handleRes);
  };

  function handleRes(res){
    if(!res.data.success){
      $scope.loginError = res.data;
    }
    else {
      $scope.loginError = false;
      $location.path('/');
    }
  }

  $scope.logout = function(){
    AuthFactory.logout();
  };
}]);