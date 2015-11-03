(function() {
    'use strict';
    angular
        .module('autoresume.skills', ['ngMessages'])
        .controller('SkillsController', SkillsController);

    /* @ngInject */
    function SkillsController($log, SkillService, $mdToast, $state, $auth) {
        var vm = this;

        vm.update = update;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        // TOOD retrieve all the skill entries from the server
        vm.skillList = {
            "skills": [
                {
                    "id": 1,
                    "skill": "Server management",
                    "description": "Geavanceerd, 6 jaar ervaring. Ervaren in het congureren van Linux servers en het beheren van webservers (apache, iptables, htaccess). Ervaring met Microsoft System Center en Windows server 2012.",
                    "type": "Work",
                    "enabled": true
                },
                {
                    "id": 2,
                    "skill": "Database management",
                    "description": "Geavanceerd, 4 jaar ervaring. Diverse databases opgezet en onderhouden (Relationeel, noSQL, Oracle).",
                    "type": "Work",
                    "enabled": false
                },
                {
                    "id": 3,
                    "skill": "HTML + CSS",
                    "description": "Geavanceerd, 10 jaar ervaring. Kennis van HTML 5 en CSS 3.",
                    "type": "Work",
                    "enabled": true
                },
                {
                    "id": 5,
                    "skill": "",
                    "description": "Kan objectieve en verhelderende publicaties schrijven over technische en wetenschappelijke onderwerpen.",
                    "type": "Communication",
                    "enabled": true
                },
                {
                    "id": 7,
                    "skill": "",
                    "description": "Is ondernemend ingesteld.",
                    "type": "Organisational",
                    "enabld": false
                }
            ],
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

        vm.deleteSkill = function(skillId) {
            SkillService.delete(skillId).$promise.then(
                function(response) {
                    $mdToast.show($mdToast.simple().content('Skill entry deleted').hideDelay(3000).position('bottom right'));        
                }, function(error) {
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));        
                }
            );
        };

        vm.create = function() {
            $state.go('autoresume.skills.add');
        };
        
        /**
         * signup, handles the signup for any user
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function update(){
            // somebody submitted the form and its valid            
            if(vm.skillForm.$valid) {
                // perform the call to the api with the user.
                SkillService.update(vm.skillList).$promise.then(
                    function(response) {
                        // response went OK so lets reload the page
                        $state.go('autoresume.skills');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.skillForm.$setDirty();
        }
    }
})();