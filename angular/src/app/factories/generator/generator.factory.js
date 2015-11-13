(function() {
    'use strict';
    angular
        .module('autoresume.factory.generator', [])
        .factory('GeneratorService', GeneratorService);

    // GeneratorFactory.$inject = ['$resource'];

    /* @ngInject */
    function GeneratorService($resource, API_URL) {
      var data =  $resource(API_URL + 'user/:id', {id: '@_id'}, {
        query: {
          method:'GET',
          isArray:false
        }
      });

      return data;
    }

})();
