(function() {
  'use strict';

  angular
    .module('autoresume.config', [])
    .config(config);
    

    /** @ngInject */
    function config($logProvider, $mdThemingProvider, $mdIconProvider, $authProvider, API_URL) {
        // Enable log
        $logProvider.debugEnabled(true);

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('light-green');

        // Configure URLs for icons specified by [set:]id.
        $mdIconProvider
           .defaultFontSet( 'fontawesome' );

        // set the token url we're fetching this here. 
        $authProvider.loginUrl = API_URL + '/authenticate/token';
    }

})();