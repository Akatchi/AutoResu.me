(function(){
    'use strict';

    angular
        .module('autoresume', [
            'autoresume.core',
            'autoresume.constants',
            'autoresume.config',
            'autoresume.factories',
            'autoresume.routes',
            'autoresume.navbar',
            'autoresume.signup',
            'autoresume.login',
            'autoresume.generator',
            'autoresume.retrieve',
            'autoresume.admin',
            'autoresume.education',
            'autoresume.skills',
            'autoresume.work',
            'autoresume.personal',
            'autoresume.photo',
        ]);
})()
