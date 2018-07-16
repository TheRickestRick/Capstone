(function() {
  'use strict'

  angular.module('app')
    .component('influencer', {
      templateUrl: '/js/influencer/influencer.template.html',
      controller: controller
    })

  controller.$inject = ['$http', '$cookies']
  function controller($http, $cookies) {
    const vm = this

    vm.$onInit = onInit
    vm.createInfluencerAccount = createInfluencerAccount
    vm.influencerlogin = influencerlogin
    vm.influencerlogOut = influencerlogOut
    vm.showSharedLinks = showSharedLinks
    vm.toggleInfluencerSignUp = toggleInfluencerSignUp
    vm.tallyTotalPoints = tallyTotalPoints
    vm.activateLink = activateLink;
    let isInfluencerLoggedIn;
    let influencerUserInfo;
    vm.influencerUserObj;

    function onInit() {
      influencerUserInfo = window.localStorage.getItem('influencer')
      vm.influencerUserObj = JSON.parse(influencerUserInfo)
      vm.influencerSignUpToggled = false
      vm.isInfluencerLoggedIn = window.localStorage.getItem('isInfluencerLoggedIn') ? true : false
      showSharedLinks()
      tallyTotalPoints()
    }

    function createInfluencerAccount() {
      $http.post('/api/influencers/signup', vm.influencerCreate)
      .then(response => {
        window.localStorage.setItem('influencer', JSON.stringify(response.data))
        window.localStorage.setItem('isInfluencerLoggedIn', 'true')
        vm.isInfluencerLoggedIn = true
        delete vm.influencerCreate
      })
    }

    function influencerlogin() {
      $http.post('/api/influencers/login', vm.influencerLogin)
      .then(response => {
        window.localStorage.setItem('influencer', JSON.stringify(response.data))
        window.localStorage.setItem('isInfluencerLoggedIn', 'true')
        vm.isInfluencerLoggedIn = true;
        delete vm.influencerLogin
        onInit()
      })
    }

    function influencerlogOut() {
        window.localStorage.setItem('isInfluencerLoggedIn', '')
        window.localStorage.setItem('influencer', '')
        vm.isInfluencerLoggedIn = false;
        $http.delete('/api/influencers/logout')
        .then( done => {})
    }

    function toggleInfluencerSignUp() {
      vm.influencerSignUpToggled = !vm.influencerSignUpToggled
    }

    function showSharedLinks() {
      $http.get(`/api/campaigns`)
        .then(response => vm.campaigns = response.data)
    }

    function activateLink(campaign) {
      $http.post(`api/influencers/activateLink/${vm.influencerUserObj.id}`, campaign)
    }

    function tallyTotalPoints() {
      $http.get(`api/shared/${vm.influencerUserObj.id}`)
        .then(response => response.data)
        .then( campaigns_shared => {
          vm.totalInfluencerPoints = 0;
          vm.campaigns.forEach( campaign => {
            campaign.total_pts = 0;
            for (var i = 0; i < campaigns_shared.length; i++) {
              if (campaign.id === campaigns_shared[i].campaign_id) {
                campaign.total_pts  += campaign.maxcpc * campaigns_shared[i].clicks
                vm.totalInfluencerPoints += campaign.total_pts
              }
            }
          })
        })
    }

  }

}());
