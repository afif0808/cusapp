app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/app/components/customer/customerView.html",
    controller : "CustomerController"
  })
  .when("/pelanggan/tambah", {
    templateUrl : "/app/components/addCustomer/addCustomerView.html",
    controller : "AddCustomerController"
  })
  .when("/pelanggan/lihat", {
    templateUrl : "/app/components/viewCustomer/viewCustomerView.html",
    controller : "ViewCustomerController"
  })
  .when("/pelanggan/ubah", {
    templateUrl : "/app/components/editCustomer/editCustomerView.html",
    controller : "EditCustomerController"
  })
});
