(function() {
    'use strict';
    angular
        .module('autoresume.factory.user', [])
        .factory('UserService', UserService);
    /* @ngInject */
    function UserService($resource, API_URL) {
        var data = $resource(API_URL + 'user/:id', {id: '@_id'}, {
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