app.controller('ViewCustomerController',function($scope,$http,$state){
  $scope.selectedCustomer = JSON.parse(sessionStorage.getItem('selectedCustomer'))
  /**
    * Redirect to customer's shipping label page
  */
  $scope.goToShippingLabelPage = function() {
    window.location.href="#!/pengiriman/label"
  }

  /**
    * Redirects to EditCustomer page
  */
  $scope.goToEditCustomerPage = function() {
    window.location.href="#!/pelanggan/ubah"
  }


})
