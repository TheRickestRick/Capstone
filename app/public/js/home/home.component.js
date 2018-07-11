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
    vm.showCampaignForm = showCampaignForm
    vm.createCampaign = createCampaign
    let loggedIn;
    let userInfo;
    let userObj;

    function onInit() {
      userInfo = window.localStorage.getItem('user')
      userObj = JSON.parse(userInfo)
      console.log(userObj.id)
      getCampaigns()

      vm.campaignFormActive = false;

      vm.loggedIn = window.localStorage.getItem('isLoggedIn') ? true : false
    }

    function createAccount() {
      $http.post('/api/promoters/signup', vm.promoterCreate)
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response.data))
        window.localStorage.setItem('isLoggedIn', 'true')
        vm.loggedIn = true
        delete vm.promoterCreate
      })
    }

    function login() {
      $http.post('/api/promoters/login', vm.promoterLogin)
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response.data))
        window.localStorage.setItem('isLoggedIn', 'true')
        vm.loggedIn = true;
        delete vm.promoterLogin
      })
    }

    function logOut() {
        window.localStorage.setItem('isLoggedIn', '')
        window.localStorage.setItem('user', '')
        vm.loggedIn = false;
        $http.delete('/api/promoters/logout')
        .then( done => {})
    }

    function showCampaignForm(){
      vm.campaignFormActive = !vm.campaignFormActive
    }

    function createCampaign() {
      $http.post(`/api/campaigns/create/${userObj.id}`, vm.campaign)
        .then(response => {
          vm.showCampaignForm()
          delete vm.campaign
        })
    }

    function getCampaigns() {
      console.log(userObj)
      $http.get(`/api/campaigns/${userObj.id}`)
        .then(response => vm.campaigns = response.data)
    }

  }

}());
