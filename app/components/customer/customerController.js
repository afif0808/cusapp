app.controller('customerController',function($http,$scope){
 window.onload = function() {
   $scope.getCustomers($scope.customersAPIURL)
 }

 $scope.customers = []
 $scope.nextCustomersURL = ""
 $scope.previousCustomersURL = ""
 $scope.customersCountPerList = 4;
 $scope.customersAPIURL = $scope.$parent.customersAPIURL + "?limit=" + $scope.customersCountPerList
 $scope.siteURL = $scope.$parent.siteURL
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
   * @param {string} keyword - search keyword
 */
 $scope.searchCustomers = function(keyword) {
   $scope.getCustomers($scope.customersAPIURL+"&s="+keyword)
 }
 /**
   * Get next customer list .
   * redirect to default route.
 */
 $scope.getNextCustomersList = function() {
   window.location.href=$scope.siteURL
   $scope.getCustomers($scope.nextCustomersURL)
 }

 /**
   * Get previous customer list .
   * redirect to default route.
 */
 $scope.getPreviousCustomersList = function(){}
  window.location.href=$scope.siteURL
  $scope.getCustomers($scope.previousCustomersURL)
})
