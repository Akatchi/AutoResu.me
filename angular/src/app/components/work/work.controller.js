(function() {
    'use strict';
    angular
        .module('autoresume.work', ['ngMessages'])
        .controller('WorkController', WorkController);

    /* @ngInject */
    function WorkController($log, WorkService, $mdToast, $state, $auth) {
        var vm = this;

        vm.update = update;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        // TOOD retrieve all the work entries from the server
        vm.workList = {
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

        vm.deleteWork = function(workId) {
            WorkService.delete(workId).$promise.then(
                function(response) {
                    $mdToast.show($mdToast.simple().content('Work entry deleted').hideDelay(3000).position('bottom right'));        
                }, function(error) {
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));        
                }
            );
        };

        vm.create = function() {
            $state.go('autoresume.work.add');
        };
        
        /**
         * signup, handles the signup for any user
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function update(){
            // somebody submitted the form and its valid            
            if(vm.workForm.$valid) {
                // perform the call to the api with the user.
                WorkService.update(vm.work).$promise.then(
                    function(response) {
                        // response went OK so lets reload the page
                        $state.go('autoresume.work');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.workForm.$setDirty();
        }
    }
})();