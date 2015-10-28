(function() {
    'use strict';
    angular
        .module('autoresume.home', [])
        .controller('HomeController', HomeController);
    
    // HomeController.$inject = ['$log'];
    
    /* @ngInject */
    function HomeController($log) {
        var vm = this;
        vm.title = 'Controller';
    }

})();