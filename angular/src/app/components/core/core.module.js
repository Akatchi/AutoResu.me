(function() {
    'use strict';

    angular
        .module('autoresume.core', [
            /**
             * Angular modules
             */
            'ngCookies', 'ngSanitize', 'ngMessages', 'ngResource', 'ngAnimate', 

            /**
             * Custom application modules
             */
            
            /**
             * 3rd party modules
             */
            'ngStorage', 'restangular', 'ui.router', 'ngMaterial', 'satellizer', 'angular-loading-bar'
        ])
        .config(config)


        // config.$inject = ['']
        

        /**
         * Config function
         */
        function config()
        {

        }
})();