define(function(require) {
    return function(module){
        var module = require('module!@');

        module.config([
            '$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '',
                        templateUrl: 'app/tpl_blocks/app.html'
                    })
                ;
            }
        ]);
    }
});