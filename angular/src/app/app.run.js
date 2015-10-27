(function() {
  'use strict';

  angular
    .module('autoresume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    // Check for initial jwt token in rootscope / cookie
    // see if valid / not expired
    // redirect to intended.
    // fail go to login.
    $log.debug('runBlock end');


    // add watcher to url changes
    // check for token valid / not expired
    // see if user trying to go login redirect back
    // if not valid return to login. remove token / cookie
  }

})();
