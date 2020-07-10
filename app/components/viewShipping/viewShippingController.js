app.controller("ViewShippingController",function($scope,$http){
  $scope.companyInformation = {}
  $scope.selectedShipping = JSON.parse(sessionStorage.getItem('selectedShipping'))

  /**
    * Return add 'zeroCount' leading zero to parameter 'number'
    * returned as string
    * @param {number} number - the string returned with leading zero
    * @param {number} zeroCount - leading zero count
  */
  $scope.withLeadingZero = function(number,zeroCount) {
    number = String(number)
    zeroCount -= number.length
    for (var i = 0; i < zeroCount; i++) {
      number = "0" + number
    }
    return number
  }

  /**
    * Get company information from 'json_database/company_info.json'
  */
  $scope.getCompanyInformation = function() {
    $http.get('/json_database/company_info.json').then(function(res){
      $scope.companyInformation = res.data
    })
  }
  $scope.getCompanyInformation()



})
