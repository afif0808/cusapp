const app = angular.module('cusApp',['ngRoute'])

app.controller('cusMainController',function($scope,$http){
  $scope.customersAPPURL = "http://localhost:321/#!/"

  window.onload = function() {
    $scope.getCustomers($scope.customersAPIURL)
  }
})
