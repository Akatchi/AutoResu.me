(function() {
    'use strict';
    angular
        .module('autoresume.factory.profile', [])
        .factory('ProfileService', ProfileService);
    /* @ngInject */
    function ProfileService($resource, API_URL) {
        var data = $resource(API_URL + 'profile');

        return data;
    }
})();