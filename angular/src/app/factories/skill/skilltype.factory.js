(function() {
    'use strict';
    angular
        .module('autoresume.factory.skilltype', [])
        .factory('SkillTypeService', SkillTypeService);
    /* @ngInject */
    function SkillTypeService($resource, API_URL) {
        var data = $resource(API_URL + 'skilltype', {id: '@_id'}, {
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