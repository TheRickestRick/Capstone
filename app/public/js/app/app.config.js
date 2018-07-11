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
      // .state({
      //   name: 'create',
      //   url: '/create',
      //   component: 'create',
      // })
      // .state({
      //   name: 'home.login',
      //   url: '/login',
      //   component: 'login',
      // })
      // .state({
      //   name: 'signup',
      //   url: '/signup',
      //   component: 'signup',
      // })
  }

}());
