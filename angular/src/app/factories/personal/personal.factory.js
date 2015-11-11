(function() {
    'use strict';
    angular
        .module('autoresume.factory.personal', [])
        .factory('PersonalService', PersonalService);
    /* @ngInject */
    function PersonalService($resource, API_URL) {
        var data = $resource(API_URL + 'personal/:id', {id: '@_id'}, {
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