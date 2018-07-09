(function() {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: '/js/home/home.template.html',
      controller: controller
    })

  controller.$inject = ['$http', '$cookies']
  function controller($http, $cookies) {
    const vm = this



    vm.$onInit = onInit
    vm.createAccount = createAccount
    vm.login = login
    vm.logOut = logOut
    let loggedIn;
    vm.showCampaignForm;

    function onInit() {
      vm.showCampaignForm = false;

      vm.loggedIn = window.localStorage.getItem('isLoggedIn') ? true : false
    }

    function createAccount() {
      $http.post('/api/promoters/signup', vm.promoterCreate)
      .then(response => {
        vm.loggedIn = true
        delete vm.promoterCreate
      })
    }

    function login() {
      $http.post('/api/promoters/login', vm.promoterLogin)
      .then(response => {
        vm.user = response.data
        console.log(vm.user.user_name)
        window.localStorage.setItem('isLoggedIn', 'true')
        vm.loggedIn = true;
        delete vm.promoterLogin
      })
    }

    function logOut() {
        window.localStorage.setItem('isLoggedIn', '')
        vm.loggedIn = false;
        vm.user = {}
        $http.delete('/api/promoters/logout')
        .then( done => {})
    }

    function showCampaignForm(){


    }

    function createCampaign() {

    }



  }

}());
