(function() {
    'use strict';
    angular
        .module('autoresume.retrieve', [])
        .controller('RetrieveController', RetrieveController);

    // RetrieveController.$inject = ['$log', '$auth', 'oAuth'];

    /* @ngInject */
    function RetrieveController($log, $auth, oAuth, UserService, $rootScope, $window, API_URL, $mdDialog) {
        var vm = this;
        vm.authenticate = authenticate;


        vm.config = oAuth.query();

        // Constructor for the RetrieveController
        
        function authenticate(provider)
        {
            var url = API_URL + 'auth/'+ provider + '?token='+$auth.getToken();
            $window.open(url, '_blank');

            var confirm = $mdDialog.confirm()
                .title('Reload page please')
                .content('We just gathered some data, please reload the page to update it')
                .ariaLabel('Reload')
                .ok('Reload')
                .cancel('I\'ll do it myself')

            $mdDialog.show(confirm).then(function(){
                $window.location.reload();
            }, function() {
                // cancel
            });
        }

    }

})();
