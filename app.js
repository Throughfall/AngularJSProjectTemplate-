/**
 * ng-pub-sub
 * @module application
 */
angular.module('application', [
        'application.config'
    ])

    .run(function ($rootScope) {
        'use strict';
    })

	// Default Application Controller
    .controller('ApplicationCtrl', function ($scope, notification) {
        'use strict';

        // Notification handling
        $scope.notification = {
            message: 'WELCOME!',
            type: 'info',
            active: true
        };
    })

	// Navigation Controller
    .controller('NavigationCtrl', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;

        $scope.$on('$routeChangeSuccess', function (eOpts, currentRoute) {
            if (currentRoute.$$route) {
                $scope.currentRoute = currentRoute.$$route;
            }
        });
    });