(function() {
    'use strict';
    angular
        .module('autoresume.jwt', [])
        .service('JwtService', JwtService);
    
    /* @ngInject */
    function JwtService($auth, $log) {
        this.func = func;
        this.authenticate = authenticate;

        ////////////////
        function func() {

        }

        function authenticate(credentials)
        {
            $auth.login(credentials)
                .then(function(data){
                    // yay
                    $log.debug(data);
                })
                .error(function(error){
                    // error raised 
                    $log.error(error);
                })
        }
    }
})();