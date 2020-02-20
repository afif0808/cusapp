const app = angular.module('cusApp',['ngRoute'])

app.controller('cusMainController',function($scope,$http){
  $scope.customersAPPURL = "http://localhost:321/#!/"
  $scope.customersAPIURL = "http://localhost:444/api/customers"
})
