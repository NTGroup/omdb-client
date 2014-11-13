define(function (require) {

    var angular = require('angular');
    var module = require('module!@');

    module.controller('omdb.controller.main', [
        '$scope', 'employers.service.omdbService',
        function ($scope, OmdbService) {
            $scope.search = {
                title: '',
                year: ''
            }
            $scope.status = null;
            $scope.errorMessage = null;
            $scope.movies = [];

            $scope.doSearch = function() {
                if($scope.search.title.trim() == '')
                    return;

                OmdbService.findMovieByTitle($scope.search.title).then(function(data){
                    if(typeof data.Error != 'undefined') {
                        $scope.status = 'error';
                        $scope.errorMessage = data.Error;
                    } else {
                        $scope.movies = data.Search;
                        console.log(data.Search);
                    }
                }, function(){
                    $scope.errorMessage = null;
                    $scope.status = 'error';
                });
            }
        }
    ]);
});