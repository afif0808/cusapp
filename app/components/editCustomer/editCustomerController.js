app.controller('EditCustomerController',function($scope,$http,$state){
  $scope.selectedCustomer = JSON.parse(sessionStorage.getItem('selectedCustomer'))
  /**
    * Edit customer with the given id
  */
  $scope.editCustomer = function() {
    $state.go('editCustomerLoading')
    $http({
      method : "POST",
      url : "http://samasecentro.com:444/api/customers/" + $scope.selectedCustomer.id,
      data : {
        newCustomerName : $scope.selectedCustomer.name,
        newCustomerInformation : $scope.selectedCustomer.information
      },
      headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
      }
    }).then(function(){
      sessionStorage.setItem('selectedCustomer',JSON.stringify($scope.selectedCustomer))
      $state.go('editCustomerDefault')
      setTimeout(function () {
        window.location.href='#!/pelanggan/lihat'
      }, 10);
    })
  }
})
