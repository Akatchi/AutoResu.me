(function() {
    'use strict';
    angular
        .module('autoresume.admin.home', [])
        .controller('AdminHomeController', AdminHomeController);
    /* @ngInject */
    function AdminHomeController(providers, oAuth, $log, $mdToast, $state, $auth) {
        var vm = this;

        vm.update = update;

        // the form errors which come bakc from the api.
        vm.formErrors = {};

        vm.providerList = providers.data;

        /**
         * Handles teh update for the oauth providers
         * This raises errors in case we have any from the API.
         * If response is correct it redirects to the overview page.
         */
        function update(){
            // somebody submitted the form and its valid            
            if(vm.adminForm.$valid) {
                // perform the call to the api with the user.
                oAuth.update(vm.providerList).$promise.then(
                    function(response) {
                        // response went OK so lets reload the page
                        $state.go('autoresume.admin.home');
                    }, function(error) {
                        $log.debug(error);
                        // bad response somethign went wrong
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            // set the form back to dirty coz somebody tried to submit.
            vm.adminForm.$setDirty();
        }

    }
})();