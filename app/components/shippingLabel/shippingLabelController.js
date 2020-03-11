app.controller("ShippingLabelController",function($scope,$state,$http){
  $scope.selectedCustomer = JSON.parse(sessionStorage.getItem('selectedCustomer'))
  $scope.companyInformation = {}


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
