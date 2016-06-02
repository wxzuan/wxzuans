define(function(require){
    'use strict';
    var services=angular.module('wxzuans.services', []);
    services.factory('Index',require('services/IndexService'));
    return services;
});


