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
            'autoresume.work',
            'autoresume.work.add',
            'autoresume.education',
            'autoresume.education.add'
        ]);
})()
