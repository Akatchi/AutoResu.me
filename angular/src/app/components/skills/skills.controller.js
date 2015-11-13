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
    
        function update(skill, skillForm) {
            $log.debug(skill);
            if(skillForm.$valid) {
                // perform the call to the api with the user.
                SkillService.update(skill, {id: skill.id}).$promise.then(
                    function() {
                        // DISABLE THE SAVE BUTTON FOR THE FORM.!
                        skillForm.$setPristine();
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            skillForm.$setDirty();
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
                        // reset that form. 
                        vm.addSkill = {};
                        vm.addSkillForm.$setPristine();
                        vm.addSkillForm.$setUntouched();
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            } else {
                // set the form back to dirty coz somebody tried to submit.
                vm.addSkillForm.$setDirty();
            }
        }

        function deleteSkill(skillId) {
            // $log.debug($filter('filter')(vm.skillList, {id: !skillId}));
            SkillService.delete({id: skillId}).$promise.then(
                function() {
                    // remove the view model thing
                    vm.skillList = $filter('filter')(vm.skillList, function(value){
                        return value.id !== skillId;
                    });

                    $mdToast.show($mdToast.simple().content('Skill entry deleted').hideDelay(3000).position('top right'));        
                }, function(error) {
                    // log the error for reference
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('top right'));        
                }
            );
        }

    }
})();