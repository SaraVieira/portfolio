var app = angular.module("Portfolio", []);

app.controller("RandomPostsCtrl", function($scope, $http) {
  $http.get('articles.json').
    success(function(data, status, headers, config) {
      $scope.articles = data;
      $scope.last_element = $scope.articles[$scope.articles.length - 1];

      $scope.Random = function() {
      	return 0.5 - Math.random();
      }
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
