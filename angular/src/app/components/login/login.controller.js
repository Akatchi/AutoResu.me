(function() {
    'use strict';
    angular
        .module('autoresume.login', [])
        .controller('LoginController', LoginController);
    
    // LoginController.$inject = ['$log'];
    
    /* @ngInject */
    function LoginController($log) {
        var vm = this;
        vm.title = 'Controller';

        vm.login = login;
        activate();
        ////////////////
        function activate() {
            
        }

        function login(loginForm) {
            $log.debug('hoihoi');
            $log.debug(loginForm);
        }
    }

})();