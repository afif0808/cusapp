app.controller('customerController',function($http,$scope){
  $scope.$on('$routeChangeSuccess', function($event, next, current) {
    $scope.getCustomers($scope.customersAPIURL)
   });
 $scope.customers = []
 $scope.nextCustomersURL = ""
 $scope.previousCustomersURL = ""
 $scope.customersLimit = 4;
 $scope.customersAPIURL =  "http://localhost:444/api/customers?limit=" + $scope.customersLimit
 $scope.customersAPPURL = $scope.$parent.customersAPPURL
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

 // make getCustomers() function accessible to parent controller
 $scope.$parent.getCustomers = $scope.getCustomers

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
   $scope.getCustomers($scope.nextCustomersURL)
   window.location.href=$scope.customersAPPURL
 }

 /**
   * Get previous customer list .
   * redirect to default route.
 */
 $scope.getPreviousCustomersList = function(){
   $scope.getCustomers($scope.previousCustomersURL)
   window.location.href=$scope.customersAPPURL
 }
})
