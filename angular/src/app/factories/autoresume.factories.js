(function() {
    'use strict';
    angular
        .module('autoresume.factories', [
            'autoresume.oauth',
            'autoresume.factory.generator',
            'autoresume.factory.user',
            'autoresume.factory.register'
        ]);
})();
