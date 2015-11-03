(function() {
    'use strict';
    angular
        .module('autoresume.work', ['ngMessages'])
        .controller('WorkController', WorkController);

    /* @ngInject */
    function WorkController($log, RegisterService, $mdToast, $state, $auth) {
        var vm = this;
        // function to sign a user up
        vm.signup = signup;
        // the new user object that we can reference
        vm.newuser = {};
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        vm.work = {
            "work": [
                {
                    "id": 1,
                    "employer": "ZINN (Thuis)zorg, Wonen en Welzijn",
                    "location": "Haren, Groningen, Netherlands",
                    "position": "Service Desk",
                    "description": "",
                    "start_date": "2013-01-01",
                    "end_date": "",
                    "enabled": true
                },
                {
                    "id": 2,
                    "employer": "Hornbach Baumarkt AG",
                    "location": "",
                    "industry": "Retail",
                    "position": "Medewerker",
                    "description": "",
                    "start_date": "2010-07-01",
                    "end_date": "2010-11-01",
                    "enabled": false
                },
                {
                    "id": 3,
                    "employer": "Bimpel",
                    "location": "",
                    "industry": "",
                    "position": "Intern",
                    "description": "",
                    "start_date": "2010-02-01",
                    "end_date": "2010-07-01",
                    "enabled": false
                }
            ]
        }
        
        /**
         * signup, handles the signup for any user
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function signup(){
            // somebody submitted the form and its valid            
            if(vm.signupForm.$valid) {
                // perform the call to the api with the user.
                RegisterService.save(vm.newuser).$promise.then(
                    function(response) {
                        var newUser = {
                            email: response.data.email,
                            password: vm.newuser.password
                        };

                        // log the user in (get the token)
                        $auth.login(newUser).then(function(){
                            // response OK
                            
                            // response went OK so lets redirect home
                            $state.go('autoresume.home');
                        }, function(error) {
                            $log.debug(error);
                            // bad response somethign went wrong
                            $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                        });

                    }, function(error) {
                        vm.formErrors = {}; // reset the errors in case this gives more than one errors
                        vm.formErrors.email = error.data.email[0];
                        vm.signupForm.email.$setValidity('unique', false);
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.signupForm.$setDirty();
        }
    }
})();