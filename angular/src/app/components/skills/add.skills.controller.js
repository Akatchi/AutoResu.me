(function() {
    'use strict';
    angular
        .module('autoresume.skills.add', ['ngMessages'])
        .controller('AddSkillsController', AddSkillsController);

    /* @ngInject */
    function AddSkillsController($log, SkillService, $mdToast, $state, $auth) {
        var vm = this;

        vm.add = add;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        vm.skill = {};
        
        // Options for the dropdown in the view
        vm.skillTypes = {
            "skillTypes": [
                {
                    "name": "Work"
                },
                {
                    "name": "Communication"
                },
                {
                    "name": "Organisational"
                }
            ]
        }

        /**
         * Add, handles the adding of the work entry
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the work page.
         */
        function add(){
            // somebody submitted the form and its valid            
            if(vm.addSkillForm.$valid) {
                $log.debug(vm.skill);
                // perform the call to the api with the user.
                SkillService.save(vm.skill).$promise.then(
                    function(response) {
                        // response went OK so go to the overview
                        $state.go('autoresume.skills');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.addSkillForm.$setDirty();
        }
    }
})();