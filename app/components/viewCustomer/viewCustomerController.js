app.controller('ViewCustomerController',function($scope,$http,$state){
  $scope.selectedCustomer = JSON.parse(sessionStorage.getItem('selectedCustomer'))
  /**
    * Redirects to EditCustomer page
    * @param{object} selectedCustomer - object of customer that to be edited
  */
  $scope.goToEditCustomerPage = function(selectedCustomer) {
    sessionStorage.setItem("selectedCustomer",JSON.stringify(selectedCustomer))
    window.location.href="#!/pelanggan/ubah"
  }

})
