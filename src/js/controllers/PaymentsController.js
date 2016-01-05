angular.module('SipreeApp.controllers.Payments', [])

.controller('PaymentsController', ['$scope', '$location', 'AuthFactory', function($scope, $location, AuthFactory){
  // dummy data for payment notifications
  $scope.payments = [
  {
    "status": "Pending",
    "amount": "$3,865.43",
    "company": "QUILCH, INC.",
    "date": "Thursday, March 6, 2014 12:00 PM"
  },
  {
    "status": "Complete",
    "amount": "$2,350.32",
    "company": "RACKET",
    "date": "Saturday, December 19, 2015 8:01 PM"
  },
  {
    "status": "Complete",
    "amount": "$3,812.04",
    "company": "ARTIQ",
    "date": "Saturday, September 13, 2014 6:57 AM"
  },
  {
    "status": "Pending",
    "amount": "$1,431.08",
    "company": "SLOFAST",
    "date": "Friday, June 13, 2014 7:10 PM"
  },
  {
    "status": "Complete",
    "amount": "$3,619.67",
    "company": "KROG, LLC",
    "date": "Tuesday, March 24, 2015 11:29 AM"
  }
];

  // dynamic styling based on payment status ('complete' vs 'pending')
  $scope.getClass = function(payment){
    return payment.status === 'Complete' ? 'completed' : 'pending';
  };

  // remove payment when swiped right
  $scope.removePayment = function(payment) {
    var index = $scope.payments.indexOf(payment);
    if (index > -1) {
      $scope.payments.splice(index, 1);
    }
  };

}]);