'use strict';

angular.module('mainApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, ngMetaProvider) {
  $routeProvider.when('/post/:slug', {
    templateUrl: '/ang_mat/post',
    controller: 'PostCtrl',
    data: {
      meta: {
        'title': 'Post',
        'description': 'Descripcion',
        'image':'ss'
      }
    }
  })
}])

.controller('PostCtrl', ['$routeParams', '$location', '$scope', 'Post', 'ngMeta', function($routeParams, $location, $scope, Post, ngMeta) {
  var self = this;

  $scope.go = function ( path ) {
    $location.path( path );

  };

  Post.get({slug: $routeParams.slug}, function(post) {
    self.post = post;
    $location.search('page', null)
    var html = self.post.content.brief;
    var div = document.createElement("div");
    div.innerHTML = html;
    self.post.content.brief = div.innerText;
    ngMeta.setTitle(self.post.title,''); //Title = Eluvium
    ngMeta.setTag('description', String(self.post.content.brief));
    ngMeta.setTag('image', String(self.post.image.secure_url));
  });
}]);
