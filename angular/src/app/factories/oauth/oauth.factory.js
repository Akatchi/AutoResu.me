(function() {
    'use strict';
    angular
        .module('autoresume.oauth', [])
        .factory('oAuth', oAuthFactory);

    // oAuthFactory.$inject = ['$resource'];

    /* @ngInject */
    function oAuthFactory($resource) {
      return $resource('app/placeholders/oauth/:filename.json', {}, {
        query: {
          method:'GET',
          params: {
            filename:'oauth'
          },
          isArray:false
        }
      });
    }

})();
