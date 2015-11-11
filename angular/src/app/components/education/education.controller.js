(function() {
    'use strict';
    angular
        .module('autoresume.education', ['ngMessages'])
        .controller('EducationController', EducationController);

    /* @ngInject */
    function EducationController($log, EducationService, $mdToast, $state, $auth, education, $filter) {
        var vm = this;

        vm.add = add;
        vm.deleteEducation = deleteEducation;
        vm.update = update;
        // the form errors which come bakc from the api.
        vm.formErrors = {};
        vm.educationList = education.data;

        if(vm.educationList.length > 0){
            angular.forEach(vm.educationList, function(value){
                value.start_date = new Date(value.start_date);
                value.end_date = new Date(value.end_date);
            });
        }
        
        function deleteEducation(educationId) {
            EducationService.delete({id: educationId}).$promise.then(
                function() {
                    vm.educationList = $filter('filter')(vm.educationList, function(value){
                        return value.id !== educationId;
                    });

                    $mdToast.show($mdToast.simple().content('Education entry deleted').hideDelay(3000).position('bottom right'));        
                }, function(error) {
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));        
                }
            );
        }

        function add(){
            // somebody submitted the form and its valid            
            if(vm.addEducationForm.$valid) {
                // perform the call to the api with the user.
                EducationService.save(vm.addEducation).$promise.then(
                    function(response) {
                        vm.educationList = response.data;
                        angular.forEach(vm.educationList, function(value){
                            value.start_date = new Date(value.start_date);
                            value.end_date = new Date(value.end_date);
                        });

                        vm.creatingNew = false;

                        vm.addEducation = {};
                        vm.addEducationForm.$setPristine();
                        vm.addEducationForm.$setUntouched();
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            } else {
                 // set the form back to dirty coz somebody tried to submit.
                vm.addEducationForm.$setDirty();
            }
        }

        /**
         * signup, handles the signup for any user
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function update(education, educationForm){
            // somebody submitted the form and its valid            
            if(educationForm.$valid) {
                // perform the call to the api with the user.
                EducationService.update({id: education.id}, education).$promise.then(
                    function() {
                        educationForm.$setPristine();
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            } 
            // set the form back to dirty coz somebody tried to submit.
            educationForm.$setDirty();
        }
    }
})();