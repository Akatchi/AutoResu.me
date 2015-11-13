(function() {
    'use strict';
    angular
        .module('autoresume.factory.photo', [])
        .factory('PhotoService', PhotoService);
    /* @ngInject */
    function PhotoService($resource, API_URL) {
        var data = $resource(API_URL + 'photo/:id', {id: '@_id'}, {
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