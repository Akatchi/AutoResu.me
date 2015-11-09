(function() {
    'use strict';
    angular
        .module('autoresume.factory.education', [])
        .factory('EducationService', EducationService);
        
    /* @ngInject */
    function EducationService($resource, API_URL) {
        var data = $resource(API_URL + 'education/:id', {id: '@_id'}, {
          update: {
              method: 'PUT'
            },
            delete: {
              method: 'DELETE'
            },
            query: {
                method: 'GET',
                isArray: false
            }
        });

        return data;
    }
})();