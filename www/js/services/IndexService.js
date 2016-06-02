/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([],function(){
   'use strict';
   var factory=function($http){
       return {
       getBuyData:function(successCallback,failCallback){
          var url='http://www.111.com';
          //向服务器获得数据
          $http.jsonp(url).success(function(data){
              //处理数据
              var data=data;
              successCallback(data)
          }).error(function(error){
              //失败处理
              failCallback(error)
          })
       }
   };
   };
   factory.$inject=['$http'];
   return factory;
});

