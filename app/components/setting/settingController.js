app.controller("SettingController",function($scope,$http,$state){
    $scope.companyInformation = {}

    /**
      * Get company information from 'json_database/company_info.json'
    */
    $scope.getCompanyInformation = function() {
      $http.get("/json_database/company_info.json").then(function(res){
        $scope.companyInformation = res.data
        console.log(res.data)

      })
    }
    $scope.getCompanyInformation()


    /**
      * Edit company information in '/json_database/company_info.json'
    */
    $scope.editCompanyInformation = function() {
      $http({
        method : "POST",
        url : "/company/information",
        data : $scope.companyInformation,
      }).then(function(res){
        $state.go("settingEditCompanyInformationSuccess")
        setTimeout(function () {
          $state.go("settingDefault")          
        }, 2000);
      })
    }
})
