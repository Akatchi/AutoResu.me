(function() {
    'use strict';
    angular
        .module('autoresume.profile', ['ngMessages'])
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController($log, ProfileService, UserService, $mdToast, $state, $auth) {
        var vm = this;
        // function to save the profile page
        vm.save = save;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        // TODO: Retrieve this data from the backend
        vm.user = {
            "first_name": "Ward",
            "last_name": "Holthof",
            "gender": "male",
            "birthday": "01-11-1992",
            "birthplace": "Groningen",
            "address": "Sperwer 14",
            "postal_code": "9781XR",
            "location": "Bedum",
            "email": "s.sleaverson@gmail.com",
            "website": "http://ward.holthof.info",
            "bio": "I am awesome!",
        }

        vm.user.birthday = new Date();

        // vm.user = UserService.query(function(){
            // $rootScope.email = vm.user.data.email;
        // });
        
        /**
         * The save function which saves the form to the backend
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function save(){
            // somebody submitted the form and its valid            
            if(vm.registerForm.$valid) {
                // perform the call to the api with the user.
                ProfileService.save(vm.user).$promise.then(
                    function(response) {
                        // response went OK so lets redirect home
                        $state.go('autoresume.home');

                    }, function(error) {
                        vm.formErrors = {}; // reset the errors in case this gives more than one errors
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.registerForm.$setDirty();
        }
    }
})();