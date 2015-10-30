(function() {
    'use strict';
    angular
        .module('autoresume.generator', [])
        .controller('GeneratorController', GeneratorController);

    // GeneratorController.$inject = ['$log', 'Generator'];

    /* @ngInject */
    function GeneratorController($log, Generator) {
        var vm = this;
        vm.data = Generator.query();

        $log.debug('Generator data: ' + vm.data);
    }

})();
