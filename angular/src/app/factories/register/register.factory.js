(function() {
    'use strict';
    angular
        .module('autoresume.factory.register', [])
        .factory('RegisterService', RegisterService);
    /* @ngInject */
    function RegisterService($resource, API_URL) {
        var data = $resource(API_URL + 'register');

        return data;
    }
})();