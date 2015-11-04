(function() {
    'use strict';
    angular
        .module('autoresume.generator', [])
        .controller('GeneratorController', GeneratorController);

    // GeneratorController.$inject = ['$log', 'Generator'];

    /* @ngInject */
    function GeneratorController(Generator) {
        var vm = this;


        vm.removeText = 'Remove';
        vm.undoText = 'Undo';
        vm.addText = 'Add';

        // Get al the data
        Generator.query(function(data) {
            vm.data = data.data;
        });
    }
})();
