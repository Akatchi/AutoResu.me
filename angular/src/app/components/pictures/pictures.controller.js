(function() {
   'use strict';
   angular
       .module('autoresume.pictures', ['ngMessages'])
       .controller('PicturesController', PicturesController);
   /* @ngInject */
   function PicturesController($log, pictureService, $mdToast, $state) {
       var vm = this;
       vm.update = update;
       // the form errors which come bakc from the api.
       vm.formErrors = {};
       // TOOD retrieve all the pictues
       vm.pictureList = {
          "pics": {
            "1": "https://scontent.xx.fbcdn.net/hprofile-xpf1/v/t1.0-1/p200x200/10500340_713297112104135_6096529267085293974_n.jpg?oh=d774281ff1febcf1723a7a5f8fc082c5&oe=56C19289",
            "2": "https://scontent.xx.fbcdn.net/hprofile-xpf1/v/t1.0-1/p200x200/10500340_713297112104135_6096529267085293974_n.jpg?oh=d774281ff1febcf1723a7a5f8fc082c5&oe=56C19289",
            "3": "https://scontent.xx.fbcdn.net/hprofile-xpf1/v/t1.0-1/p200x200/10500340_713297112104135_6096529267085293974_n.jpg?oh=d774281ff1febcf1723a7a5f8fc082c5&oe=56C19289"
          }
       }
       vm.deletePicture = function(pictureId) {
           pictureService.delete(pictureId).$promise.then(
               function(response) {
                   $mdToast.show($mdToast.simple().content('Picture has been deleted').hideDelay(3000).position('bottom right'));
               }, function(error) {
                   $log.debug(error);
                   $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));        
               }
           );
       };
       
       /**
        * signup, handles the signup for any user
        * This raises errors in case we have any from the API.
        * If response is correct it redirects to the home page.
        */
       function update(){
           // somebody submitted the form and its valid            
           if(vm.pictureForm.$valid) {
               // perform the call to the api with the user.
               pictureService.update(vm.pictureList).$promise.then(
                   function(response) {
                       // response went OK so lets reload the page
                       $state.go('autoresume.pictures');
                   }, function(error) {
                       $log.debug(error);
                       // bad response somethign went wrong
                       $mdToast.show($mdToast.simple().content('Something went wrong, please try again').hideDelay(3000).position('bottom right'));
                   }
               );
           }
           // set the form back to dirty coz somebody tried to submit.
           vm.pictureForm.$setDirty();
       }
   }
})();