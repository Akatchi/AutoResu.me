(function() {
    'use strict';
    angular
        .module('autoresume.photo', [])
        .controller('PhotoController', PhotoController);
    /* @ngInject */
    function PhotoController(photos) {
        var vm = this;
        vm.photos = photos.data
        activate();
        ////////////////
        function activate() {
        }
    }
})();