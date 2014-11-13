define(function(require) {

    var module = require('module!@');

    module.service('employers.service.omdbService', function($http, $q){
        this.findMovieByTitle = function(title, year) {
            var url = 'http://www.omdbapi.com/?r=json';
            url += '&s=' + title;
            if(typeof year != 'undefined')
                url += '&y=' + year;

            var request = $http.get(url);
            return (request.then(handleSuccess, handleError));
        }

        this.getMovieById = function(id) {
            var url = 'http://www.omdbapi.com/?r=json&plot=full';
            url += '&i=' + id;

            var request = $http.get(url);
            return (request.then(handleSuccess, handleError));
        }

        // Private methods
        function handleError(response) {
            return($q.reject({}));
        }

        function handleSuccess(response) {
            return(response.data);
        }
    })
});