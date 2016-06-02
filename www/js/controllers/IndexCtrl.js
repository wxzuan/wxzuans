/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['app'], function (app) {
    'use strict';
    function ctrl($scope, $timeout, $ionicLoading) {
        // Setup the loader
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
        $timeout(function () {
            $ionicLoading.hide();
        }, 2000);
    }
    app.registerController('IndexCtrl',ctrl);
});

