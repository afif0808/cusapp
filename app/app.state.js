/**
  * set states for AddCustomer component
  * @param {object} $stateProvider - to get access to $stateProvider
*/
function setAddCustomerState($stateProvider) {
  var addCustomerDefault = {
    name : 'addCustomerDefault',
    url : '/pelanggan/tambah',
    template : ""
  }
  var addCustomerSuccess = {
    name : 'addCustomerSuccess',
    url : '/pelanggan/tambah',
    template : "<span class='alert alert-success'>Pelanggan baru berhasil ditambahkan</span>"
  }
  var addCustomerLoading = {
    name : 'addCustomerLoading',
    url : '/pelanggan/tambah',
    templateUrl : "/assets/state-template/spinner-border-primary.html"
  }
  $stateProvider.state(addCustomerDefault)
  $stateProvider.state(addCustomerSuccess)
  $stateProvider.state(addCustomerLoading)
}
/**
  * set states for EditCustomer component
  * @param {object} $stateProvider - to get access to $stateProvider
*/
function setEditCustomerState($stateProvider) {
  var editCustomerDefault = {
    name : 'editCustomerDefault',
    url : '/pelanggan/ubah',
    template : ""
  }
  var editCustomerSuccess = {
    name : 'editCustomerSuccess',
    url : '/pelanggan/ubah',
    template : "<span class='alert alert-success'>Berhasil mengubah pelanggan</span>"
  }
  var editCustomerLoading = {
    name : 'editCustomerLoading',
    url : '/pelanggan/ubah',
    templateUrl : "/assets/state-template/spinner-border-primary.html"
  }
  $stateProvider.state(editCustomerDefault)
  $stateProvider.state(editCustomerSuccess)
  $stateProvider.state(editCustomerLoading)
}

app.config(function($stateProvider){
  var defaultState = {
    name : 'defaultState',
    url : '/',
  }
  $stateProvider.state(defaultState)
  setAddCustomerState($stateProvider)
  setEditCustomerState($stateProvider)
})
