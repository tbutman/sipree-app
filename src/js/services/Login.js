angular.module('SipreeApp.services.Login', [])
.factory('AuthFactory', ['$http', '$location', function($http, $location){
  var signedIn = false;
  var email = '';
  var password = '';

  return {
    getAuthState : function(){
      return signedIn;
    },

    login : function(credentials, cb){
      $http({
        method: 'POST',
        url: '/authenticate',
        data: {
          email: credentials.email,
          password: credentials.password
        }
      }).then(function onSuccess(res){
        if(res.data.success){
          signedIn = true;
          $location.path('/home');
        }
        else {
          cb(res);
        }
      }.bind(this), function onError(res){
        cb(res);
      });
    },
    
    logout: function(){
      signedIn = false;
      $location.path('/login');
    },
  }; 
}]);