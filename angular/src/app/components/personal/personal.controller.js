(function() {
    'use strict';
    angular
        .module('autoresume.personal', ['ngMessages'])
        .controller('PersonalInformationController', PersonalInformationController);
    /* @ngInject */
    function PersonalInformationController($log, personal) {
        var vm = this;
        vm.save = save;
        activate();
        ////////////////
        function activate() {
        }

        function save(){
            $log.debug(vm.personalInfoForm.firstName.$error);
        }
    }
})();