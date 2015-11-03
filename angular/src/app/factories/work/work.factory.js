(function() {
    'use strict';
    angular
        .module('autoresume.factory.work', [])
        .factory('WorkService', WorkService);
        
    /* @ngInject */
    function WorkService($resource, API_URL) {
        var data = $resource(API_URL + 'work/:id', {id: '@_id'}, {
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