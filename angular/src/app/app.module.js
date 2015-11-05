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
            'autoresume.home',
            'autoresume.admin',
            'autoresume.education',
            'autoresume.skills',
            'autoresume.work',
            'autoresume.work.add',
            'autoresume.education.add'
        ]);
})()
