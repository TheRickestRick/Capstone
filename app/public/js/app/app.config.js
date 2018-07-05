(function() {
  'use strict'

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'app.dashboard',
        url: '/',
        component: 'dashboard',
      })
      .state({
        name: 'app.login',
        url: '/login',
        component: 'login',
      })
      .state({
        name: 'app.signup',
        url: '/signup',
        component: 'signUp',
      })
  }

}());
