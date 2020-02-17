app.controller('customerController',function($http,$scope){
 window.onload = function() {
   $scope.getCustomers($scope.customersAPIURL)
 }

 $scope.customers = []
 $scope.nextCustomersURL = ""
 $scope.previousCustomersURL = ""
 $scope.customersAPIURL = "http://localhost:444/api/customers"
 /**
   * Get customer resource from customers API
   * @param {string} customer - customer resource API url
 */
 $scope.getCustomers = function(customerURL) {
   $http.get(customerURL).then(function(res){
     $scope.customers = res.data.result
     $scope.nextCustomersURL = res.data.next
     $scope.previousCustomersURL = res.data.previous
   })
 }

 /**
   * Search for customers from customers API with 'getCustomers()' function
   * then do getCustomers()
   * @param {string} keyword - search keyword
 */
 $scope.searchCustomers = function(customersResourceURL,keyword) {
   $scope.getCustomers(customersResourceURL+"?s="+keyword)
 }

 $scope.getNextListCustomers = function() {}
 $scope.getPreviousListCustomers = function(){}

})
