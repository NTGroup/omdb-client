define(function (require) {

    var angular = require('angular');
    var module = require('module!@');

    module.controller('omdb.controller.main', [
        '$scope', 'employers.service.omdbService',
        function ($scope, OmdbService) {
            $scope.search = '';
            $scope.status = null;
            $scope.errorMessage = null;
            $scope.movies = [];

            $scope.doSearch = function() {
                if($scope.search.trim() == '')
                    return;

                OmdbService.findMovieByTitle($scope.search.trim()).then(function(data){
                    if(typeof data.Error != 'undefined') {
                        $scope.movies = [];
                        $scope.status = 'error';
                        $scope.errorMessage = data.Error;
                    } else {
                        $scope.status = null;
                        $scope.movies = data.Search;
                    }
                }, function(){
                    $scope.movies = [];
                    $scope.errorMessage = null;
                    $scope.status = 'error';
                });
            }
        }
    ]);
});