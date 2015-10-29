(function() {
    'use strict';
    angular
        .module('autoresume.home', [])
        .controller('HomeController', HomeController);
    
    // HomeController.$inject = ['$log', '$auth', 'oAuth'];
    
    /* @ngInject */
    function HomeController($log, $auth, oAuth) {
        var vm = this;
        vm.data = oAuth.query();

        vm.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    }

})();