// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: "views/template.html",
            controller: 'AboutUsCtrl'
        })
        .state('events', {
            url: "/events",
            templateUrl: "views/template.html",
            controller: 'EventsCtrl'
        })
        .state('news-detail', {
            url: "/news-detail",
            templateUrl: "views/template.html",
            controller: 'NewsDetailCtrl'
        })
        .state('quality-policy', {
            url: "/quality-policy",
            templateUrl: "views/template.html",
            controller: 'QualityPolicyCtrl'
        })
        .state('plant-location', {
            url: "/plant-location",
            templateUrl: "views/template.html",
            controller: 'PlantLocationCtrl'
        })
        .state('careers', {
            url: "/careers",
            templateUrl: "views/template.html",
            controller: 'CareersCtrl'
        })
        .state('news', {
            url: "/news",
            templateUrl: "views/template.html",
            controller: 'NewsCtrl'
        })
        .state('pet', {
            url: "/pet",
            templateUrl: "views/template.html",
            controller: 'PetBottlesCtrl'
        })
        .state('pof', {
            url: "/pof",
            templateUrl: "views/template.html",
            controller: 'PofShrinkFilmCtrl'
        })
        .state('bags-liners', {
            url: "/bags-liners",
            templateUrl: "views/template.html",
            controller: 'Bags-LinersCtrl'
        })
        .state('speciality-film', {
            url: "/speciality-film",
            templateUrl: "views/template.html",
            controller: 'Speciality-FilmCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: "views/template.html",
            controller: 'FormCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
firstapp.directive('autoHeightfixed', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height() - 20;
            var addHeight = function() {
                $element.css("height", windowHeight);
            };
            addHeight();
        }
    };
});
firstapp.directive('autoHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
