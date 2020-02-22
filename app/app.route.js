app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/app/components/customer/customerView.html",
    controller : "CustomerController"
  })
  .when("/pelanggan/tambah", {
    templateUrl : "/app/components/addCustomer/addCustomerView.html",
    controller : "AddCustomerController"
  });
});

app.config(function($stateProvider){
  var defaultState = {
    name : 'addCustomerDefault',
    url : '/pelanggan/tambah',
    template : ""
  }
  var addCustomerSuccess = {
    name : 'addCustomerSuccess',
    url : '/pelanggan/tambah',
    template : "<span class='alert alert-success'>Pelanggan baru berhasil ditambahkan</span>"
  }
  $stateProvider.state(defaultState)
  $stateProvider.state(addCustomerSuccess)
})
