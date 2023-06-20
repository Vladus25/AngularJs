angular.module('movieSearchApp', [])
.controller('movieSearchController', function ($scope, $http) {
  $scope.searchQuery = '';
  $scope.movies;

  $scope.searchMovies = function () {
    var apiUrl = 'https://www.omdbapi.com/?apikey=81141edd&t=' + $scope.searchQuery;

    $http.get(apiUrl)
      .then(function (response) {
        $scope.movies = response.data;
        console.log($scope.movies);
      })
      .catch(function (error) {
        console.log('Error:', error);
      });
  };
});

