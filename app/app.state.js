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

/**
  * set states for Setting component
  * @param {object} $stateProvider - to get access to $stateProvider
*/
function setSettingState($stateProvider) {
  var settingDefault =  {
    name : 'settingDefault',
    url : '/pengaturan'
  }
  var settingEditCompanyInformationSuccess = {
    name : 'settingEditCompanyInformationSuccess',
    url : '/pengaturan',
    template : "<div class='alert alert-success'>Informasi perusahaan berhasil diubah</div>"
  }
  $stateProvider.state(settingDefault)
  $stateProvider.state(settingEditCompanyInformationSuccess)

}

/**
  * set states for AddShipping component
  * @param {object} $stateProvider - to get access to $stateProvider
*/
function setAddShippingState($stateProvider) {
  var addShippingDefault = {
    name : 'addShippingDefault',
    url : '/pengiriman/tambah'
  }
  $stateProvider.state(addShippingDefault)
}

/**
  * set states for ViewShipping component
  * @param {object} $stateProvider - to get access to $stateProvider
*/
function setViewShippingState($stateProvider) {
  var viewShippingDefault = {
    name : 'viewShippingDefault',
    url : '/pengiriman/lihat'
  }
  $stateProvider.state(viewShippingDefault)
}

function setViewCustomerState($stateProvider) {
  var viewCustomerDefault = {
    name : 'viewCustomerDefault',
    url : '/pelanggan/lihat'
  }
  var viewCustomerDeleteConfirmation = {
    name : 'viewCustomerDeleteConfirmation',
    url : '/pelanggan/lihat',
    templateUrl :"/app/components/viewCustomer/deleteConfirmationModal.html" ,
  }
  $stateProvider.state(viewCustomerDefault)
  $stateProvider.state(viewCustomerDeleteConfirmation)
}

app.config(function($stateProvider){
  var defaultState = {
    name : 'defaultState',
    url : '/',
  }
  $stateProvider.state(defaultState)
  setAddCustomerState($stateProvider)
  setEditCustomerState($stateProvider)
  setSettingState($stateProvider)
  setAddShippingState($stateProvider)
  setViewShippingState($stateProvider)
  setViewCustomerState($stateProvider)
})
