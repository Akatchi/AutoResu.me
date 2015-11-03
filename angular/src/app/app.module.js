(function(){
    'use strict';

    angular
        .module('autoresume', [
            'autoresume.core',
            'autoresume.constants',
            'autoresume.config',
            'autoresume.factories',
            'autoresume.routes',
            'autoresume.signup',
            'autoresume.login',
            'autoresume.generator',
            'autoresume.home',
            'autoresume.admin',
            'autoresume.profile'
        ]);
})()
