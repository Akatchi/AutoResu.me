(function() {
    'use strict';
    angular
        .module('autoresume.factory.skill', [])
        .factory('SkillService', SkillService);
    /* @ngInject */
    function SkillService($resource, API_URL) {
        var data = $resource(API_URL + 'skill/:id', {id: '@_id'}, {
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