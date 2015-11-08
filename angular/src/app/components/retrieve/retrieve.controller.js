(function() {
    'use strict';
    angular
        .module('autoresume.retrieve', [])
        .controller('RetrieveController', RetrieveController);

    // RetrieveController.$inject = ['$log', '$auth', 'oAuth'];

    /* @ngInject */
    function RetrieveController($log, $auth, oAuth, UserService, $rootScope) {
        var vm = this;


        vm.config = oAuth.query();

        vm.user = UserService.query(function(){
            $rootScope.name = vm.user.data.name;
            $rootScope.email = vm.user.data.email;
        });
        // Constructor for the RetrieveController
        


    }

})();
