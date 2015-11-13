(function() {
    'use strict';
    angular
        .module('autoresume.personal', ['ngMessages'])
        .controller('PersonalInformationController', PersonalInformationController);
    /* @ngInject */
    function PersonalInformationController($log, personal, PersonalService, $localStorage, $rootScope, $mdToast) {
        var vm = this;
        vm.personal = personal.data;
        vm.genderTypes = [
            {
                value: 'male',
                pretty: 'Male'
            },
            {
                value: 'female',
                pretty: 'Female'
            },
            {
                value: 'other',
                pretty: 'Other'
            }
        ];

        vm.personal.birthday = new Date(vm.personal.birthday);
        vm.save = save;
        activate();
        ////////////////
        function activate() {
        }

        function save(){
            if(vm.personalInfoForm.$valid) {
                PersonalService.save(vm.personal).$promise.then(
                    function(){
                        vm.personalInfoForm.$setPristine();
                        $localStorage.email = vm.personal.email;
                        $localStorage.name = vm.personal.first_name +' '+vm.personal.last_name;

                        $rootScope.email = $localStorage.email;
                        $rootScope.name = $localStorage.name;

                        $mdToast.show($mdToast.simple().content('Personal Information updated').hideDelay(3000).position('bottom right'));
                    },
                    function(error){
                        $log.debug(error);
                        $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                    }
                );
            }

            vm.personalInfoForm.$setDirty();
        }
    }
})();