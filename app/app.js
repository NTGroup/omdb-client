define(function(require) {
    'use strict';

    require('modules/application/includes');
    require('modules/omdb/includes');

    // App-wide controller
    require('modules/application/controllers/main');

    var angular = require('angular');
    require('angular-cookies');
    require('angular-bootstrap');
    require('angular-bootstrap-tpls');
    require('angular-resource');
    require('angular-storage');
    require('angular-load');
    require('angular-ui-utils');
    require('angular-ui-router');
    require('angular-translate');
    require('angular-translate-static-loader');
    require('angular-translate-local-storage');
    require('angular-translate-cookie-storage');
    require('angular-dynamic-locale');

    var name = 'ntgroup';
    var app = angular.module(name, [
        'ngResource',
        'ngCookies',
        'ngStorage',
        'ui.router',
        'ui.bootstrap',
        'ui.load',
        'ui.jq',
        'ui.validate',
        'pascalprecht.translate',
        'tmh.dynamicLocale',

        'application',
        'omdb'
    ]);

    app.run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                console.timeEnd('application loading');
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    );
    app.config(
        ['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
                app.controller = $controllerProvider.register;
                app.directive  = $compileProvider.directive;
                app.filter     = $filterProvider.register;
                app.factory    = $provide.factory;
                app.service    = $provide.service;
                app.constant   = $provide.constant;
                app.value      = $provide.value;
            }
        ])
        .config(['$translateProvider', function($translateProvider){
            $translateProvider.useStaticFilesLoader({
                prefix: 'app/l10n/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('ru');
            $translateProvider.useLocalStorage();

        }])
        .config(['tmhDynamicLocaleProvider', function(tmhDynamicLocaleProvider) {
            tmhDynamicLocaleProvider.localeLocationPattern("/vendor/angular-i18n/angular-locale_{{locale}}.js");
        }])
    ;
});