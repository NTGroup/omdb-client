requirejs.config({
    baseUrl: 'app',
    paths: {
        'angular': '../vendor/angular/angular',
        'angular-load': '../libs/ui-load',
        'text': '../vendor/requirejs-text/text',
        'base': '../vendor/requirejs-angular-loader/src/base',
        'template': '../vendor/requirejs-angular-loader/src/template',
        'controller': '../vendor/requirejs-angular-loader/src/controller',
        'service': '../vendor/requirejs-angular-loader/src/service',
        'module': '../vendor/requirejs-angular-loader/src/module',
        'config': '../vendor/requirejs-angular-loader/src/config',
        'directive': '../vendor/requirejs-angular-loader/src/directive',
        'filter': '../vendor/requirejs-angular-loader/src/filter',

        // Extra bundles
        'jquery': '../vendor/jquery/dist/jquery.min',
        'angular-storage': '../vendor/ngstorage/ngStorage',
        'angular-cookies': '../vendor/angular-cookies/angular-cookies',
        'angular-bootstrap': '../vendor/angular-bootstrap/ui-bootstrap',
        'angular-bootstrap-tpls': '../vendor/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-utils': '../vendor/angular-ui-utils/ui-utils',
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-translate': '../vendor/angular-translate/angular-translate',
        'angular-translate-static-loader': '../vendor/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angular-translate-local-storage': '../vendor/angular-translate-storage-local/angular-translate-storage-local',
        'angular-translate-cookie-storage': '../vendor/angular-translate-storage-cookie/angular-translate-storage-cookie',
        'angular-i18n-ru': '../vendor/angular-i18n/angular-locale_ru-ru',
        'angular-dynamic-locale': '../vendor/angular-dynamic-locale/tmhDynamicLocale.min'
    },
    structure: {
        prefix: 'modules/{module}',
        module: {
            path: '/{module}'
        },
        template: {
            path: '/resources/views/{template}.{extension}',
            extension: 'html'
        },
        controller: {
            path: '/controllers/{controller}'
        },
        service: {
            path: '/src/{service}'
        },
        config: {
            path: '/resources/configs/{config}'
        },
        directive: {
            path: '/resources/directives/{directive}'
        },
        filter: {
            path: '/resources/filter/{filter}'
        }
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-storage': {
            deps: ['angular']
        },
        'angular-ui-utils': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls': {
            deps: ['angular', 'angular-bootstrap']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-load': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'angular-translate-static-loader': {
            deps: ['angular-translate']
        },
        'angular-translate-local-storage': {
            deps: ['angular-translate']
        },
        'angular-translate-cookie-storage': {
            deps: ['angular-translate']
        },
        'angular-i18n-ru': {
            deps: ['angular']
        },
        'angular-dynamic-locale': {
            deps: ['angular']
        }
    }
});


console.time('application loading');
require(['./bootstrap', 'jquery']);