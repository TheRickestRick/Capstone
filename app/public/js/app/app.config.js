(function() {
  'use strict'

  angular.module('app')
    .config(config)



  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home',
      })
      .state({
        name: 'influencer',
        url: '/influencer',
        component: 'influencer',
      })
      .state({
        name: 'shared',
        url: `/shared/:campaign_id/:influencer_id`,
        component: 'shared',
      })
  }

}());
