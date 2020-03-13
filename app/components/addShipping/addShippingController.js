app.controller("AddShippingController",function($http,$scope,$state){
  $scope.selectedCustomer = JSON.parse(sessionStorage.getItem('selectedCustomer'))
  /*
    Add shipping and get its id
  */
  $scope.addShipping = function() {
    $http({
      method : "POST",
      url : "http://localhost:454/api/shippings",
      data : {
        customer_id : $scope.selectedCustomer.id,
        information : $scope.shippingInformation,
        invoice : $scope.shippingInvoice,
      },
      headers : {
        "Content-Type" : "application/json"
      }
    }).then(function(res){
      var shipping = {
        id : res.data.id,
        information : $scope.shippingInformation,
        invoice : $scope.shippingInvoice,
        customer : $scope.selectedCustomer,
      }
      sessionStorage.setItem("selectedShipping",JSON.stringify(shipping))
    },function(){
      // error case;
    })
  }
})
