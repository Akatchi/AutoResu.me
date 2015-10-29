(function() {
  'use strict';

  angular
    .module('autoresume.config', ['satellizer'])
    .config(config)
    .config(oAuthConfig);
    

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

    function oAuthConfig($authProvider) {

        $authProvider.facebook({
          clientId: 'Facebook App ID'
        });

        $authProvider.github({
          clientId: 'GitHub Client ID'
        });

        $authProvider.linkedin({
          clientId: 'LinkedIn Client ID'
        });

    });

})();
