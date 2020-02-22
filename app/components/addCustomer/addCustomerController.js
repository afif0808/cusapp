app.controller('AddCustomerController',function($scope,$http,$state){
  /**
    * Add a customer then redirect to its detailed view
  */
  $scope.addCustomer = function() {
    $http({
      method : "POST",
      url : "http://localhost:444/api/customers",
      data : {
        customerName : $scope.newCustomersName,
        customerInformation : $scope.newCustomerInformation,
      },
      headers  : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }).then(function(){
      $state.go('addCustomerSuccess')
      setTimeout(function () {
        window.location.href="#!/pelanggan/lihat"
      }, 1000);
    })

  }
})
