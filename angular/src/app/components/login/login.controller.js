(function() {
    'use strict';
    angular
        .module('autoresume.login', [])
        .controller('LoginController', LoginController);
    
    // LoginController.$inject = ['$log'];
    
    /* @ngInject */
    function LoginController($log, $auth, $mdToast, $state) {
        var vm = this;
        // initial user model
        vm.user = {} 
        vm.login = login;
        activate();
        ////////////////
        function activate() {
            // $log.debug($auth.isAuthenticated());
        }

        function login() {
            if(vm.loginForm.$valid) {
                $auth.login(vm.user).then(function(){
                    // call success and we can interact with our user
                    // grab the payload so we can see if we're admin
                    var payload = $auth.getPayload();
                    // check if we are the admin
                    if(payload.admin) {
                        // redirect to an admin home
                        $state.go('autoresume.admin.home')
                    } else {
                        // not an admin redirect to regular home
                        $state.go('autoresume.home')
                    }
                }, function(){
                    // call failed, the user didnt authenticate properly
                    vm.loginForm.email.$setValidity('required', false);
                    vm.loginForm.password.$setValidity('required', false);
                    // raise a toast.
                    $mdToast.show($mdToast.simple().content('Invalid e-mai/password combination').hideDelay(3000).position('bottom right'));
                });
            }
        }
    }

})();