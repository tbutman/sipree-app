angular.module('SipreeApp', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures',
  'SipreeApp.controllers.Main',
  'SipreeApp.controllers.Login',
  'SipreeApp.controllers.Navbar',
  'SipreeApp.controllers.Payments',
  'SipreeApp.directives'
])

// routes are secured via the resolve property 
// which will check the user's auth status prior to switching routes
.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:'home.html',
    reloadOnSearch: false,
    resolve: {
      // check if user is logged in and, if not, redirect to login page
      checkAuth: function(AuthFactory, $location){
        if (!AuthFactory.getAuthState()) {
          $location.path('/login');
        }
      }
    }
  });
  $routeProvider.when('/login', {
    templateUrl:'login.html',
    reloadOnSearch: false,
  });
  $routeProvider.when('/about', {
    templateUrl:'about.html',
    reloadOnSearch: false,
    resolve: {
      // check if user is logged in and, if not, redirect to login page
      checkAuth: function(AuthFactory, $location){
        if (!AuthFactory.getAuthState()) {
          $location.path('/login');
        }
      }
    }
  });
  $routeProvider.when('/payments', {
    templateUrl:'payments.html',
    reloadOnSearch: false,
    resolve: {
      // check if user is logged in and, if not, redirect to login page
      checkAuth: function(AuthFactory, $location){
        if (!AuthFactory.getAuthState()) {
          $location.path('/login');
        }
      }
    }
  });
});
