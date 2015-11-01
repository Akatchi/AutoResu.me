(function() {
    'use strict';
    angular
        .module('autoresume.admin.home', [])
        .controller('AdminHomeController', AdminHomeController);
    /* @ngInject */
    function AdminHomeController($log) {
        var vm = this;
        vm.title = 'Controller';
        activate();
        ////////////////
        function activate() {
            $log.debug('admin controller');
        }
    }
})();