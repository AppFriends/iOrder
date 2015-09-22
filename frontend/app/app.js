(function(angular) {
  'use strict';
  //módulo root do app
  angular.module('oluduro', ['ui.router','ngMaterial'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
          .otherwise('/');

        $locationProvider.html5Mode(true);
      }]);
})(angular);