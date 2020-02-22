const app = angular.module('cusApp',['ngRoute','ui.router'])

app.controller('cusMainController',function($scope,$http){
  $scope.customersAPPURL = "http://localhost:321/#!/"

  window.onload = function() {
    // $scope.getCustomers($scope.customersAPIURL)
  }
})
