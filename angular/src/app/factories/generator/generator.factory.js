(function() {
    'use strict';
    angular
        .module('autoresume.generator', [])
        .factory('Generator', GeneratorFactory);

    // GeneratorFactory.$inject = ['$resource'];

    /* @ngInject */
    function GeneratorFactory($resource) {
      return $resource('app/placeholders/generator/:filename.json', {}, {
        query: {
          method:'GET',
          params: {
            filename:'generator'
          },
          isArray:false
        }
      });
    }

})();
