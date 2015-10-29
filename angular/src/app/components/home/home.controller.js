(function() {
    'use strict';
    angular
        .module('autoresume.home', [])
        .controller('HomeController', HomeController);
    
    // HomeController.$inject = ['$log', ' $auth'];
    
    /* @ngInject */
    function HomeController($log, $auth) {
        var vm = this;

        vm.authenticate = function(provider) {
            $log.debug('Authenticating for provider: ' + provider);
            $auth.authenticate(provider);
        };
    }

})();