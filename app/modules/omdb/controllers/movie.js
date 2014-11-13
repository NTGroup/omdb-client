define(function (require) {

    var angular = require('angular');
    var module = require('module!@');

    module.controller('omdb.controller.movie', [
        '$scope', '$stateParams', 'employers.service.omdbService',
        function ($scope, $stateParams, OmdbService) {
            $scope.error = false;
            $scope.movie = null;

            var movieId = null;
            if($stateParams.id)
                movieId = $stateParams.id;
            if(movieId == null) {
                $scope.error = 'emptyId';
                return;
            }

            OmdbService.getMovieById(movieId).then(function(data){
                if(typeof data.Error != 'undefined') {
                    $scope.error = 'notFound';
                } else {
                    $scope.movie = data;
                    console.log(data);
                }
            }, function(){
                $scope.error = 'networkError';
            });
        }
    ]);
});