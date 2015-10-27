(function() {
    'use strict';

    angular
        .module('autoresume.core', [
            /**
             * Angular modules
             */
            'ngCookies', 'ngSanitize', 'ngMessages',

            /**
             * Custom application modules
             */
            
            /**
             * 3rd party modules
             */
            'ngStorage', 'restangular', 'ui.router', 'ngMaterial', 'satellizer'
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