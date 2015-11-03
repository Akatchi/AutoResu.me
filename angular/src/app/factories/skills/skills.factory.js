(function() {
    'use strict';
    angular
        .module('autoresume.factory.skills', [])
        .factory('SkillService', SkillService);
        
    /* @ngInject */
    function SkillService($resource, API_URL) {
        var data = $resource(API_URL + 'skill/:id', {id: '@_id'}, {
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