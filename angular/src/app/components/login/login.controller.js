(function() {
    'use strict';
    angular
        .module('autoresume.login', [])
        .controller('LoginController', LoginController);
    
    // LoginController.$inject = ['$log'];
    
    /* @ngInject */
    function LoginController($log, $auth, $mdToast, $state, UserService, $localStorage, $rootScope) {
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

                    UserService.query({include: 'personal,photo'}).$promise.then(function(response){
                        if(typeof $localStorage.email == 'undefined'){
                          $rootScope.email = response.data.personal.data.email
                          $localStorage.email = response.data.personal.data.email
                        } else {
                          $rootScope.email = $localStorage.email;
                        }

                        if (typeof $localStorage.name == 'undefined') {
                          $rootScope.name = response.data.personal.data.first_name + ' '+ response.data.personal.data.last_name;
                          $localStorage.name = response.data.personal.data.first_name + ' '+ response.data.personal.data.last_name;
                        } else {
                          $rootScope.name = $localStorage.name;
                        }
                        
                        if(typeof $localStorage.image == 'undefined') {
                          angular.forEach(response.data.photo.data, function(value, index){
                            if(value.enabled == true) {
                                $rootScope.image = value.url;
                                $localStorage.image = value.url;
                            }
                          });
                        } else {
                          $rootScope.image = $localStorage.image;
                        }
                    });

                    // call success and we can interact with our user
                    // grab the payload so we can see if we're admin
                    var payload = $auth.getPayload();
                    // check if we are the admin
                    if(payload.admin) {

                        // redirect to an admin home
                        $state.go('autoresume.admin.home');
                    } else {
                        // not an admin redirect to regular home
                        $state.go('autoresume.retrieve');
                    }
                }, function(){
                    // call failed, the user didnt authenticate properly
                    vm.loginForm.email.$setValidity('required', false);
                    vm.loginForm.password.$setValidity('required', false);
                    // raise a toast.
                    $mdToast.show($mdToast.simple().content('Invalid e-mail/password combination').hideDelay(3000).position('bottom right'));
                });
            }
        }
    }

})();