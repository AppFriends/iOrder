(function(angular) {
  'use strict';

  angular.module('oluduro')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        });
    }]);
})(angular);