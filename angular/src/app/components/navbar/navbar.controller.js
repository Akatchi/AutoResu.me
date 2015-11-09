(function() {
    'use strict';
    angular
        .module('autoresume.navbar', [])
        .controller('NavbarController', NavbarController);
    /* @ngInject */
    function NavbarController($mdSidenav, $auth, $state) {
        var vm = this;
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;

        /**
         * toggleSidenav, helps the menu to expand or close on mobile device.
         * @param  String position The position of the menu
         */
        function toggleSidenav(position)
        {
            $mdSidenav(position).toggle();
        }

        /**
         * logout, handles the remove of the token.
         * After that it redirects the user to the login page.
         */
        function logout()
        {
            $auth.logout();
            $state.go('anon.login');
        }

    }
})();