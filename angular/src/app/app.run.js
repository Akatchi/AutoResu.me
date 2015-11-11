(function() {
  'use strict';

  angular
    .module('autoresume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $auth, $state, $localStorage) {
    var rootScope = $rootScope;

    rootScope.admin = $auth.getPayload().admin;
    if(typeof $localStorage.email == 'undefined'){
      rootScope.email = 'Not yet set';
      rootScope.name = 'Not yet set';
      rootScope.image = 'http://emerge-game.com/wp-content/uploads/unknown-user.png'
    } else {
      rootScope.email = $localStorage.email;
      rootScope.name = $localStorage.name;
      rootScope.image = $localStorage.image;
    }
    
    
    // the watcher for the route changes
    rootScope.$on( '$stateChangeStart', function(e, toState){
        // The login check 
        var isLogin = toState.name == 'anon.login';
        var isSignup = toState.name == 'anon.signup';

        // user wants to hit the login page or the signup page
        if(isLogin || isSignup) {
          // but we are authenticated and have an account so redirect back home
          if($auth.isAuthenticated()) {
            e.preventDefault();
            $state.go('autoresume.home');
          } else {
            // we are not authenticated or dont have account so let the user go
            return;
          }
        }

        // The filter to prevent unauthorized to hit routes.
        if(!isLogin) {
          // we're on another route than login
          if($auth.isAuthenticated()) {
            // check if we're admin
            // grab the payload there's an admin parameter
            var payload = $auth.getPayload();
            // see if we are admin and the route requires and admin before continue
            if( toState.data.admin ) { 
              // This is an admin route.
              if(!payload.admin) {
                // we're no admin so we can't continue
                e.preventDefault();
                $state.go('autoresume.home');
              } 
              // we're administrator so lets continue
              return;

            }
            // we're not hitting admin route so lets continue
            return;

          } else {
            // we're not authenticated
            // not allwed to enter redirect back to login.
            e.preventDefault();
            $state.go('anon.login');
          }
        }
      });
  }

})();
