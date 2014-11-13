define(function(require) {
    return function(module){
        var module = require('module!@');

        module.config([
            '$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $stateProvider
                    .state('app.main', {
                        url: '/',
                        template: require('template!main')
                    })
                    .state('app.movie', {
                        url: '/movie/:id',
                        template: require('template!movie'),
                        controller: function($stateParams){
                            $stateParams.id
                        }
                    })
                    .state('app.about', {
                        url: '/about',
                        template: require('template!about')
                    });
                ;
            }
        ]);
    }
});