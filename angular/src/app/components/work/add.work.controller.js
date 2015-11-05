(function() {
    'use strict';
    angular
        .module('autoresume.work.add', ['ngMessages'])
        .controller('AddWorkController', AddWorkController);

    /* @ngInject */
    function AddWorkController($log, WorkService, $mdToast, $state, $auth) {
        var vm = this;

        vm.add = add;
        // the form errors which come bakc from the api.
        vm.formErrors = {};

        vm.work = {};
        
        /**
         * Add, handles the adding of the work entry
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the work page.
         */
        function add(){
            // somebody submitted the form and its valid            
            if(vm.addWorkForm.$valid) {
                // perform the call to the api with the user.
                WorkService.save(vm.work).$promise.then(
                    function(response) {
                        // response went OK so go to the overview
                        $state.go('autoresume.work');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.addWorkForm.$setDirty();
        }
    }
})();