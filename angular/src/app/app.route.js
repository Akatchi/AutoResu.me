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
      .state('autoresume.retrieve', {
        url: '/',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/home.html',
            controller: 'RetrieveController',
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
        },
        resolve: {
          /** @ngInject */
          generatorData: function(GeneratorService) {
            return GeneratorService.query({include: 'work,personal,skill.skilltype,education,photo'}).$promise;
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
        },
        resolve: {
          /** @ngInject */
          providers: function(oAuth) {
            return oAuth.query().$promise;
          }
        }
      })
      .state('autoresume.personal', {
        url: '/personal',
        views: {
          'main@': {
            'templateUrl': 'app/templates/views/autoresume/personal.html',
            'controller': 'PersonalInformationController',
            'controllerAs': 'vm'
          }
        },
        resolve: {
          /** @ngInject */
          personal: function(PersonalService){
            return PersonalService.query().$promise;
          }
        }
      })
      .state('autoresume.photo', {
        url: '/photo',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/photo.html',
            controller: 'PhotoController',
            controllerAs: 'vm'
          }
        },
        resolve: {
          /** @ngInject */
          photos: function(PhotoService){
            return PhotoService.query().$promise;
          }
        }
      })
      .state('autoresume.work', {
        url: '/work',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/work.html',
            controller: 'WorkController',
            controllerAs: 'vm'
          }
        },
        resolve: {
          /** @ngInject */
          workList: function(WorkService) {
            return WorkService.query().$promise;
          }
        }
      })
      .state('autoresume.education', {
        url: '/education',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/education.html',
            controller: 'EducationController',
            controllerAs: 'vm'
          }
        },
        resolve: {
          /** @ngInject */
          education: function(EducationService){
            return EducationService.query().$promise;
          }
        }
      })
      .state('autoresume.skills', {
        url: '/skills',
        views: {
          'main@': {
            templateUrl: 'app/templates/views/autoresume/skills.html',
            controller: 'SkillsController',
            controllerAs: 'vm'
          }
        },
        resolve: {
          /** @ngInject */
          skills: function(SkillService) {
            return SkillService.query({
              include: 'skilltype'
            }).$promise;
          },
          skilltypes: function(SkillTypeService) {
            return SkillTypeService.query().$promise;
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
