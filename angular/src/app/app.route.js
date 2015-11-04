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
        },
        data: {
          admin: false // these are the generic routes, no admin required.
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
      .state('autoresume.pictures', {
        url: '/pictures',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/pictures.html',
            controller: 'PicturesController',
            controllerAs: 'vm'
          }
        }
      })
      .state('autoresume.admin', {
        abstract: true,
        url: '/administrator',
        data: {
          admin: true
        }
      })
      .state('autoresume.admin.home', {
        url: '/overview',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/admin/home.html',
            controller: 'AdminHomeController',
            controllerAs: 'vm'
          }
        }
      })
      .state('anon', {
        abstract: true,
        data: {
          admin: false
        },
        views: {
          'sidebar': {
            templateUrl: 'app/templates/views/template/sidebar.html',
            /* @ngInject */
            controller: function($scope) {
              // this needs to be done differently (it flashes still.)
              $scope.nsidebar = true; // hide the sidebar
            }
          }
        }
      })    
      .state('anon.login', {
        url: '/login',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          }
        }
      })
      .state('anon.signup', {
        url: '/signup',
        views: {
          'main@' : {
            templateUrl: 'app/templates/views/autoresume/signup.html',
            controller: 'SignupController',
            'controllerAs': 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
