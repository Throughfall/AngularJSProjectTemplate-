/**
 * ng-pub-sub
 * @module application.config
 */
angular.module('application.config', [
        'ngRoute'
    ])

    .constant('DEV_MODE', true)

	// List of Items
    .constant('NAV_ITEMS', [
        {title: 'Page 1', index: 'page1', hash: '#', icon: ' glyphicon glyphicon-home'},
        {title: 'Page 2', index: 'page2', hash: '#page2', icon: ' glyphicon glyphicon-home'},
        {title: 'Contact', index: 'contact', hash: '#contact', icon: ' glyphicon glyphicon-envelope'}
    ])

    .config(function ($provide, DEV_MODE) {
        'use strict';

        $provide.decorator('$exceptionHandler',
            function ($delegate, $window) {
                return function(exception, cause) {
                    if (DEV_MODE) {
                        $delegate(exception, cause);
                    } else {
                        $window.location.href = '#/error';
                    }
                };
            });
    })

	// Router Configuration
    .config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                index: 'Page 1'
            })
            .when('/contact', {
                templateUrl: 'view/contact.html',
                index: 'contact'
            })
            .when('/error', {
                templateUrl: 'view/error.html',
                index: 'error'
            })
            .when('/404', {
                templateUrl: 'view/404.html',
                index: '404'
            })
            .otherwise({
                redirectTo: '/404'
            });
    });
