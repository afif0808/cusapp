
app.controller('AddCustomerController',function($scope,$http,$state){
  /**
    * Add a customer then redirect to its detailed view
  */
  $scope.addCustomer = function() {
    $state.go('addCustomerLoading')
    $http({
      method : "POST",
      url : "http://samasecentro.com:444/api/customers",
      data : {
        customerName : $scope.newCustomerName,
        customerInformation : $scope.newCustomerInformation,
      },
      headers  : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }).then(function(){
      var dateNow = new Date();
      $scope.selectedCustomer = {
        name : $scope.newCustomerName,
        information : $scope.newCustomerInformation,
        date_added : dateNow.getFullYear() + "-" + (dateNow.getMonth()+1) + "-" + dateNow.getDate()
      }
      sessionStorage.setItem('selectedCustomer',JSON.stringify($scope.selectedCustomer))
      $state.go('addCustomerDefault')
      setTimeout(function () {
        window.location.href="#!/pelanggan/lihat"
      }, 10);
    })

  }
})
