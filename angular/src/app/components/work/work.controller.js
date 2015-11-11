(function() {
    'use strict';
    angular
        .module('autoresume.work', ['ngMessages'])
        .controller('WorkController', WorkController);

    /* @ngInject */
    function WorkController($log, WorkService, $mdToast, $state, $auth, workList, $filter) {
        var vm = this;
        vm.deleteWork = deleteWork;
        vm.update = update;
        vm.add = add;
        // the form errors which come bakc from the api.
        vm.formErrors = {};
        vm.workList = workList.data;
        vm.addWork = {};

        if(vm.workList.length > 0) {
            angular.forEach(vm.workList, function(value){
                value.start_date = new Date(value.start_date);
                value.end_date = new Date(value.end_date);
            });
        }


        /**
         * 
         * deleteWork, handles the remove of the work entry by the id given.
         * @param  Int      workId the work id which we want to delete
         * @return void     we update the list with a filter
         */
        function deleteWork(workId) {
            WorkService.delete({id: workId}).$promise.then(
                function() {
                    vm.workList = $filter('filter')(vm.workList, function(value){
                        return value.id !== workId;
                    });
                    $mdToast.show($mdToast.simple().content('Work entry deleted').hideDelay(3000).position('bottom right'));        
                }, function(error) {
                    $log.debug(error);
                    $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));        
                }
            );
        }

        /**
         * Add, handles the adding of the work entry
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the work page.
         */
        function add(){
            // somebody submitted the form and its valid            
            if(vm.addWorkForm.$valid) {
                // perform the call to the api with the user.
                WorkService.save(vm.addWork).$promise.then(
                    function(response) {
                        vm.workList = response.data;
                        // enable new date object
                        angular.forEach(vm.workList, function(value){
                            value.start_date = new Date(value.start_date);
                            value.end_date = new Date(value.end_date);
                        });

                        // response went OK so go to the overview
                        vm.creatingNew = false;
                        // reset that form. 
                        vm.addWork = {};
                        vm.addWorkForm.$setPristine();
                        vm.addWorkForm.$setUntouched();
                    }, function(error) {
                        // set proper form errors !
                        $log.debug(error);
                        // bad respo124nse somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            } else {
                // set the form back to dirty coz somebody tried to submit.
                vm.addWorkForm.$setDirty();
            }
        }

        /**
         * update, handles the update for any work item
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the home page.
         */
        function update(work, workForm){
            // somebody submitted the form and its valid            
            if(workForm.$valid) {
                // perform the call to the api with the user.
                WorkService.update({id: work.id}, work).$promise.then(
                    function() {
                        workForm.$setPristine();
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            workForm.$setDirty();
        }
    }
})();