(function() {
    'use strict';
    angular
        .module('autoresume.skills', ['ngMessages'])
        .controller('SkillsController', SkillsController);
    /* @ngInject */
    function SkillsController($log, skills, skilltypes, $mdToast, $state, $auth, SkillService, $filter) {
        var vm = this;
        vm.update = update;
        vm.add = add;
        vm.deleteSkill = deleteSkill;
        // resolvers
        vm.skillTypes = skilltypes.data;
        vm.skillList = skills.data;

        // toggle the views
        vm.creatingNew = false;

        // form errors from the backend
        vm.formErrors = {};
    
        function update(skill) {
            $log.debug(skill);
            // if(vm.skillForm.$valid) {
            //     // perform the call to the api with the user.
            //     SkillService.update(vm.skillList).$promise.then(
            //         function(response) {
            //             // DISABLE THE SAVE BUTTON FOR THE FORM.!
            //         }, function(error) {
            //             $log.debug(error);
            //             // bad response somethign went wrong
            //             $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
            //         }
            //     );
            // }

            // set the form back to dirty coz somebody tried to submit.
            vm.skillForm.$setDirty();
        }

        /**
         * Add, handles the adding of the work entry
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the work page.
         */
        function add(){
            // somebody submitted the form and its valid            
            if(vm.addSkillForm.$valid) {
                // perform the call to the api with the user.
                SkillService.save({include: 'skilltype'}, vm.addSkill).$promise.then(
                    function(response) {
                        vm.skillList = response.data;
                        // response went OK so go to the overview
                        vm.creatingNew = false;
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

        function deleteSkill(skillId) {
            SkillService.delete({id: skillId}).$promise.then(
                function(response) {
                    vm.skillList = $filter('filter')(vm.skillList, {id: '!skillId'});
                    $mdToast.show($mdToast.simple().content('Skill entry deleted').hideDelay(3000).position('top right'));        
                }, function(error) {
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('top right'));        
                }
            );
        }

    }
})();