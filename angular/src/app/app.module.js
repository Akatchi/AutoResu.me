(function(){
    'use strict';

    angular
        .module('autoresume', [
            'autoresume.core',
            'autoresume.constants',
            'autoresume.config',
            'autoresume.services',
            'autoresume.routes',
            'autoresume.login'
        ]);
})()