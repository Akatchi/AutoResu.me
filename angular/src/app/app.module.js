(function(){
    'use strict';

    angular
        .module('autoresume', [
            'autoresume.core',
            'autoresume.constants',
            'autoresume.config',
            'autoresume.services',
            'autoresume.factories',
            'autoresume.routes',
            'autoresume.login',
            'autoresume.home',
            'autoresume.generator'
        ]);
})()
