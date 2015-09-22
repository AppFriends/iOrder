(function(angular) {
  'use strict';

  angular.module('oluduro')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginCtrl'
        });
    }]);
})(angular);