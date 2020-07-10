app.controller("AddShippingController",function($http,$scope,$state){
  $scope.selectedCustomer = JSON.parse(sessionStorage.getItem('selectedCustomer'))

  /**
    * Return add 'zeroCount' leading zero to parameter 'number'
    * returned as string
    * @param {number} number - the string returned with leading zero
    * @param {anything} zeroCount - leading zero count
  */
  $scope.withLeadingZero = function(number,zeroCount) {
    number = String(number)
    zeroCount -= number.length
    for (var i = 0; i < zeroCount; i++) {
      number = "0" + number
    }
    return number
  }

  /*
    Date format : dd/mm/yyyy
  */
  $scope.getDate = function() {
    var date = new Date()
    return date.getDate() + "-" + $scope.withLeadingZero(date.getMonth()+1,2) + "-" + date.getYear()
  }
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
        date : $scope.getDate()
      }
      sessionStorage.setItem("selectedShipping",JSON.stringify(shipping))
      $state.go('viewShippingDefault')
    },function(){
      // error case;
    })
  }
})
