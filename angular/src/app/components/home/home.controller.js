(function() {
    'use strict';
    angular
        .module('autoresume.home', [])
        .controller('HomeController', HomeController);

    // HomeController.$inject = ['$log', '$auth', 'oAuth'];

    /* @ngInject */
    function HomeController($log, $auth, oAuth, UserService, $rootScope) {
        var vm = this;


        vm.config = oAuth.query();

        vm.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
        vm.user = UserService.query(function(){
            $rootScope.name = vm.user.data.name;
            $rootScope.email = vm.user.data.email;
        });
        // Constructor for the HomeController
        


    }

})();
