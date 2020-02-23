const app = angular.module('cusApp',['ngRoute','ui.router'])

app.controller('cusMainController',function($scope,$http){
  $scope.customersAPPURL = "http://localhost:321/#!/"
  $scope.selectedCustomer = {}

  /**
    * Redirects to AddCustomer page
  */
  $scope.goToAddCustomerPage = function() {
     location.href="#!/pelanggan/tambah"
  }

})
