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
  /**
    * Redirects to AddShipping page
  */
  $scope.goToAddShippingPage = function() {
    $state.go('addShippingDefault')
  }

  /**
    * Show delete customer confirmation with modal
    *
  */
  $scope.confirmDeleteCustomer = function() {
    $state.go("viewCustomerDeleteConfirmation")
  }
  /**
    * Cancel delete customer and close the modal
  */
  $scope.cancelDeleteCustomer = function() {
    $state.go('viewCustomerDefault')
  }

  $scope.deleteCustomer = function(id) {
    $http.delete("http://localhost:444/api/customers/" + id).then(function(){
      $state.go('defaultState')
    })
  }


})
