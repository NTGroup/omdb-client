define(function(require) {
    var module = require('module!@');

    require('config!main')(module);
    require('controller!main');
    require('controller!movie');
    require('service!omdbService');
});