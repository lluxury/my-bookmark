var app = angular.module('bookmarkApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('bookmarks', {
            url: '/bookmarks',
            templateUrl: '/views/bookmarks.html',
            params: {
                foo: null,
                bar: null
            },
            controller: 'bookmarksCtr'
        })
        .state('addBookmark', {
            url: '/addBookmark',
            templateUrl: '/views/addBookmark.html',
        })
        .state('tags', {
            url: '/tags',
            templateUrl: '/views/tags.html',
            controller: 'tagsCtr'
        })
        .state('advice', {
            url: '/advice',
            templateUrl: '/views/advice.html',
        })
        .state('settings', {
            url: '/settings',
            templateUrl: '/views/settings.html',
        })
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html'
        })
        .state('/', {
            url: '/',
            templateUrl: '/views/home.html',
            controller: 'homeCtr'
        });
});