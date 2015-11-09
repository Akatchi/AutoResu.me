(function() {
    'use strict';
    angular
        .module('autoresume.oauth', [])
        .factory('oAuth', oAuthFactory);

    // oAuthFactory.$inject = ['$resource'];

    /* @ngInject */
    function oAuthFactory($resource, API_URL) {
      var data = $resource(API_URL + 'provider/:id', {id: '@_id'}, {
          update: {
              method: 'PUT'
          },
          query: {
              method: 'GET',
              isArray: false
          }
      });
      
      return data;
    }

})();
