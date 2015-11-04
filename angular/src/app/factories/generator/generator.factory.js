(function() {
    'use strict';
    angular
        .module('autoresume.factory.generator', [])
        .factory('Generator', GeneratorFactory);

    // GeneratorFactory.$inject = ['$resource'];

    /* @ngInject */
    function GeneratorFactory($resource) {

    // Get the combined json file
      return $resource('app/placeholders/generator/generator.json', {}, {
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
