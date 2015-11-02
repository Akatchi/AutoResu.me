(function() {
    'use strict';
    angular
        .module('autoresume.factory.generator', [])
        .factory('Generator', GeneratorFactory);

    // GeneratorFactory.$inject = ['$resource'];

    /* @ngInject */
    function GeneratorFactory($http) {

      /*
       * Split up the factory for each service we use.
       * This way we can always just refresh the data for
       * one service instead of having to refresh all of them.
       * The getAllData() function will get all of the services.
       */
      var factory = { };


      // Get the data we need from facebook
      /*
       * This new version will also structure 
       * the data in the way we want to use it.
       */
      factory.getFacebook = function() {

        /*
         * The actual call we want to do:
         * https://graph.facebook.com/v2.5/me/?fields=name,first_name,middle_name,last_name,gender,birthday,hometown,location,email,website,relationship_status,religion,political,languages,sports,work,education,cover,bio
         * We have stored the result of this call 
         * into the facebook.json file for testing.
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/facebook.json',
          method: 'GET',
          headers: { 'Authorization': 'OAuth AccessToken' }
        }).
        then(function(response) {
          return { 
            firstName: response.data.first_name,
            middleName: response.data.middle_name,
            lastName: response.data.last_name,
            birthday: response.data.birthday,
            birthplace: response.data.hometown.name,
            location: response.data.location.name,
            email: response.data.email,
            website: response.data.website
          };
        }, function(response) {
          return response.data || "Request failed";
        });
      };


      // Get the images we need from facebook
      factory.getFacebookImages = function() {

        /*
         * The actual call we want to do:
         * me/picture?height=200&width=200
         * We have stored the result of this call 
         * into the facebook_images.json file for testing.
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/facebook_images.json',
          method: 'GET'
        });
      }


      // Get the data we need from LinkedIn
      factory.getLinkedIn = function() {

        /*
         * The actual call we want to do:
         * https://api.linkedin.com/v1/people/~:(first-name,last-name,headline,picture-url,industry)?format=json
         * We have stored the result of this call 
         * into the linkedin.json file for testing.
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/linkedin.json',
          method: 'GET'
        });
      }


      // Get the positions we need from LinkedIn
      factory.getLinkedInPositions = function() {

        /*
         * The actual call we want to do:
         * me/?fields=name,first_name,middle_name,last_name,gender,birthday,hometown,location,email,website,relationship_status,religion,political,languages,sports,work,education,cover,bio
         * We have stored the result of this call 
         * into the linkedin_positions.json file for testing.         
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/linkedin_positions.json',
          method: 'GET'
        });
      }


      // Get the data we need from Github
      factory.getGithub = function() {

        /*
         * The actual call we want to do:
         * https://api.github.com/user
         * We have stored the result of this call 
         * into the github.json file for testing.
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/github.json',
          method: 'GET'
        });
      }


      // Get the email addresses we need from Github
      factory.getGithubEmail = function() {

        /*
         * The actual call we want to do:
         * https://api.github.com/user/emails
         * We have stored the result of this call 
         * into the github_email.json file for testing.
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/github_email.json',
          method: 'GET'
        });
      }


      // Get the repos we need from Github
      factory.getGithubRepos = function() {

        /*
         * The actual call we want to do:
         * https://api.github.com/user/repos
         * We have stored the result of this call 
         * into the github_repos.json file for testing.
         */

        // Get the json data
        return $http({
          // This is a cashed version of the call
          // we want to make. We can replace this with
          // the real call once we have Oauth up and running.
          url: 'app/placeholders/generator/github_repos.json',
          method: 'GET'
        });
      }

      // For now just get the combined json file
      factory.getAllData = function() {

        // Get the json data
        return $http({
          // This json file is compiled using the files above.
          // We would like our final data to be structured in the same way.
          url: 'app/placeholders/generator/generator.json',
          method: 'GET'
        });
      }


      return factory;

    }
})();
