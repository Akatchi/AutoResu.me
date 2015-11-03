(function() {
    'use strict';
    angular
        .module('autoresume.education.add', ['ngMessages'])
        .controller('AddEducationController', AddEducationController);

    /* @ngInject */
    function AddEducationController($log, EducationService, $mdToast, $state, $auth) {
        var vm = this;

        vm.add = add;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        vm.education = {};
        
        /**
         * Add, handles the adding of the education entry
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the education page.
         */
        function add(){
            // somebody submitted the form and its valid            
            if(vm.addEducationForm.$valid) {
                // perform the call to the api with the user.
                EducationService.save(vm.education).$promise.then(
                    function(response) {
                        // response went OK so go to the overview
                        $state.go('autoresume.education');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.addEducationForm.$setDirty();
        }
    }
})();