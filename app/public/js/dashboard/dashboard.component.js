(function() {
  'use strict'

  angular.module('app')
    .component('dashboard', {
      require: {
        layout: '^app'
      },
      templateUrl: '/js/dashboard/dashboard.template.html',
      controller: controller
    })

  controller.$inject = ['$http']

  function controller($http) {
    const vm = this



  }

}());
