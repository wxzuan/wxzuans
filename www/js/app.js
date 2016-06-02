define(['services/services', 'controllers/controllers'], function () {
    'use strict';
    var app = angular.module('wxzuans', ['ionic', 'wxzuans.controllers', 'wxzuans.services']);
    app.run(function ($ionicPlatform) {
    }).config(function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        app.registerController = $controllerProvider.register;
        app.loadControllerJs = function (controllerJs) {
            return function ($rootScope, $q) {
                var def = $q.defer(), deps = [];
                angular.isArray(controllerJs) ? (deps = controllerJs) : deps.push(controllerJs);
                require(deps, function () {
                    $rootScope.$apply(function () {
                        def.resolve();
                    });
                });
                return def.promise;
            };
        }
        $stateProvider.state('index', {
            url: '/index',
            views: {
                'index': {
                    templateUrl: '',
                    controller: 'IndexCtrl',
                    resolve: {
                        deps: app.loadControllerJs('./controllers/IndexCtrl')
                    }
                }
            }
        });
        $urlRouterProvider.otherwise('/index');
    });
    return app;
});