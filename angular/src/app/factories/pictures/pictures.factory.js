(function() {
    'use strict';
    angular
        .module('autoresume.factory.pictures', [])
        .factory('pictureService', pictureService);
        
    /* @ngInject */
    function pictureService($resource, API_URL) {
        var data = $resource(API_URL + 'pictures/:id', {id: '@_id'}, {
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