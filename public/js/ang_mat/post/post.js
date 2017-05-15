'use strict';

angular.module('mainApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post/:slug', {
    templateUrl: '/post',
    controller: 'PostCtrl',
    // data: {
    //   meta: {
    //     'title': 'Post',
    //     'description': 'Descripcion'
    //   }
    // }
  });
}])

.controller('PostCtrl', ['$routeParams', '$location', '$scope', 'Post', function($routeParams, $location, $scope, Post) {
  var self = this;

  $scope.go = function ( path ) {
    $location.path( path );
  };

  Post.get({slug: $routeParams.slug}, function(post) {
    self.post = post;
  });
}]);
