define(function (require) {

    var angular = require('angular');
    var module = require('module!@');

    module.controller('application.controllers.main', [
        '$scope', '$translate', 'tmhDynamicLocale',
        function ($scope, $translate, tmhDynamicLocale) {
            $scope.lang = { isopen: false };
            $scope.langs = {ru:'Русский', en:'English'};
            $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "Русский";
            tmhDynamicLocale.set($translate.proposedLanguage());
            $scope.setLang = function(langKey, $event) {
                $scope.selectLang = $scope.langs[langKey];
                $translate.use(langKey);
                $scope.lang.isopen = !$scope.lang.isopen;
                tmhDynamicLocale.set(langKey);
            };
        }
    ]);
});