(function() {
  'use strict'

  angular.module('app')
    .component('shared', {
      controller: controller
    })

  controller.$inject = ['$http', '$cookies', '$stateParams']
  function controller($http, $cookies, $stateParams) {
    const vm = this

    vm.$onInit = onInit


    function onInit() {
      $http.post(`/api/shared/${$stateParams.campaign_id}/${$stateParams.influencer_id}`)
      .then((campaign)=>{
        $http.patch('/api/campaigns', campaign.data)
        .then((campaign)=>{
          console.log(campaign.data[0])
          window.location.replace(campaign.data[0].url)
        })
      })

    }

  }

}());
