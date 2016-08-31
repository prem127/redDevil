'use strict';
angular.module("myApp", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'public/views/home.html',
                controller: 'HomeController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'public/views/about.html',
                controller: 'AboutController'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'public/views/services.html'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: 'public/views/blog.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'public/views/contact.html'
            })
            .state('works', {
                url: 'works',
                templateUrl: 'public/views/project-one.html'
            });
    });