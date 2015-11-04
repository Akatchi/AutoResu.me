(function() {
    'use strict';
    angular
        .module('autoresume.factory.admin.oauth', [])
        .factory('AdminAuthService', AdminAuthService);
        
    /* @ngInject */
    function AdminAuthService($resource, API_URL) {
        var data = $resource(API_URL + 'admin/oauth/:id', {id: '@_id'}, {
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