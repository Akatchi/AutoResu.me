(function() {
  'use strict';

  angular
    .module('autoresume.routes',[])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('autoresume', {
        abstract: true,
        views: {
          'navbar': {
            templateUrl: 'app/templates/views/template/navbar.html'
          },
          'sidebar': {
            templateUrl: 'app/templates/views/template/sidebar.html'
          }
        }
      })
      .state('autoresume.home', {
        url: '/',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          }
        }
      })
      .state('autoresume.generator', {
        url: '/generator',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/generator.html',
            controller: 'GeneratorController',
            controllerAs: 'vm'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'main': {
            templateUrl: 'app/templates/views/autoresume/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
