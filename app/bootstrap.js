define([
    'require',
    'angular',
    'app'
], function (require, ng) {
    'use strict';

    angular.element(document)
        .ready(function(){
            angular.bootstrap(document, ['ntgroup']);
        });
});