(function() {
    'use strict';
    angular
        .module('autoresume.generator', [])
        .controller('GeneratorController', GeneratorController);

    // GeneratorController.$inject = ['$log', 'Generator'];

    /* @ngInject */
    function GeneratorController(generatorData, $log, $http, $window, $auth, API_URL) {
        var vm = this;
        vm.generatePdf = generatePdf;
        // vm.undoText = 'Undo';
        // vm.addText = 'Add';
        vm.generatorData = generatorData.data;
        // vm.skillTypes = skillTypes.data;

        function generatePdf()
        {
            var url = API_URL + 'pdf/generate'+ '?token='+$auth.getToken();
            $window.open(url, '_blank');
        }
    }
})();