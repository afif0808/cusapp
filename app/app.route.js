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
  .when("/pengaturan", {
    templateUrl : "/app/components/setting/settingView.html",
    controller : "SettingController"
  })
  .when("/pengiriman/label", {
    templateUrl : "/app/components/shippingLabel/shippingLabelView.html",
    controller : "ShippingLabelController"
  })
  .when("/pengiriman/tambah", {
    templateUrl : "/app/components/addShipping/addShippingView.html",
    controller : "AddShippingController"
  })
  .when("/pengiriman/lihat", {
    templateUrl : "/app/components/viewShipping/viewShippingView.html",
    controller : "ViewShippingController"
  })



});
