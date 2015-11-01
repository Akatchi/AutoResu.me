(function() {
    'use strict';
    angular
        .module('autoresume.generator', [])
        .controller('GeneratorController', GeneratorController);

    // GeneratorController.$inject = ['$log', 'Generator'];

    /* @ngInject */
    function GeneratorController($scope, Generator) {
        var vm = this;

        /* 
         * We get json data from each provider.
         * In order to avoid duplicate data we need 
         * to put all the data into one combined array 
         * that we can easily use and filter in our view
         */

        Generator.getFacebook().success(function(data) {
            // For now we just add it to the scope
            $scope.fbData = data;
        });

        Generator.getFacebookImages().success(function(data) {
            // For now we just add it to the scope
            $scope.fbImages = data;
        });

        Generator.getLinkedIn().success(function(data) {
            // For now we just add it to the scope
            $scope.linData = data;
        });

        Generator.getLinkedInPositions().success(function(data) {
            // For now we just add it to the scope
            $scope.linPositions = data;
        });

        Generator.getGithub().success(function(data) {
            // For now we just add it to the scope
            $scope.gitData = data;
        });

        Generator.getGithubEmail().success(function(data) {
            // For now we just add it to the scope
            $scope.gitEmail = data;
        });

        Generator.getGithubRepos().success(function(data) {
            // For now we just add it to the scope
            $scope.gitRepos = data;
        });
    }

})();
