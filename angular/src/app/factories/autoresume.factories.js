(function() {
    'use strict';
    angular
        .module('autoresume.factories', [
            'autoresume.oauth',
            'autoresume.factory.generator',
            'autoresume.factory.user',
            'autoresume.factory.register',
            'autoresume.factory.education',
            'autoresume.factory.skill',
            'autoresume.factory.skilltype',
            'autoresume.factory.work'
        ]);
})();
