(function() {
    'use strict';
    angular
        .module('autoresume.education', ['ngMessages'])
        .controller('EducationController', EducationController);

    /* @ngInject */
    function EducationController($log, EducationService, $mdToast, $state, $auth) {
        var vm = this;

        vm.update = update;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        // TOOD retrieve all the education entries from the server
        vm.educationList = {
            "education": [
                {
                    "id": 1,
                    "degree": "",
                    "school": "Groene School Winsum",
                    "type": "High School",
                    "field": "",
                    "start_date": "",
                    "end_date": "2008-01-01",
                    "activities": "",
                    "enabled": false
                },
                {
                    "id": 2,
                    "degree": "",
                    "school": "Hanzehogeschool Groningen",
                    "type": "College",
                    "field": "",
                    "start_date": "",
                    "end_date": "2012-01-01",
                    "activities": "",
                    "enabled": true
                },
                {
                    "id": 3,
                    "degree": "",
                    "school": "Alfa College Techniek & ICT Groningen",
                    "type": "College",
                    "field": "",
                    "start_date": "",
                    "end_date": "2012-01-01",
                    "activities": "",
                    "enabled": true
                }
            ]
        }

        vm.deleteEducation = function(educationId) {
            EducationService.delete(educationId).$promise.then(
                function(response) {
                    $mdToast.show($mdToast.simple().content('Education entry deleted').hideDelay(3000).position('bottom right'));        
                }, function(error) {
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));        
                }
            );
        };

        vm.create = function() {
            $state.go('autoresume.education.add');
        };
        
        /**
         * signup, handles the signup for any user
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function update(){
            // somebody submitted the form and its valid            
            if(vm.educationForm.$valid) {
                // perform the call to the api with the user.
                EducationService.update(vm.educationList).$promise.then(
                    function(response) {
                        // response went OK so lets reload the page
                        $state.go('autoresume.education');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.educationForm.$setDirty();
        }
    }
})();