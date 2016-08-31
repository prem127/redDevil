/* 
    app.js
    created by unitarySleet
    on 25 August 2016
    defines the angular module "myApp" for index.html
    ui.router is used as dependency for routing of SPA
*/
'use strict';
angular.module("myApp", ['ui.router','HomeController','AboutController','ServiceController','ContactController']);