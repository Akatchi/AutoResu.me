(function() {
    'use strict';
    angular
        .module('autoresume.navbar', [])
        .controller('NavbarController', NavbarController);
    /* @ngInject */
    function NavbarController($mdSidenav, $auth, $state, $localStorage, $rootScope) {
        var vm = this;
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        
        var rootScope = $rootScope;

        if(typeof $auth.getPayload() !== 'undefined') {
          rootScope.admin = $auth.getPayload().admin;
        } else {
          rootScope.admin = false;
        }
        
        if(typeof $localStorage.email == 'undefined'){
          rootScope.email = 'Not yet set';
        } else {
          rootScope.email = $localStorage.email;
        }

        if (typeof $localStorage.name == 'undefined') {
          rootScope.name = 'Not yet set';
        } else {
          rootScope.name = $localStorage.name;
        }
        
        if(typeof $localStorage.image == 'undefined') {
          rootScope.image = 'http://emerge-game.com/wp-content/uploads/unknown-user.png'
        } else {
          rootScope.image = $localStorage.image;
        }

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
            $localStorage.$reset();
            $state.go('anon.login');
        }

    }
})();