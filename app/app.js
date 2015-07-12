//App Module
'use strict';

var App = angular.module('App', [
    'ngRoute',
    'ngResource'

]).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/orders', {
                templateUrl: 'app/controllers/orders/orders-view.html',
                controller: 'OrdersController'
            }).
            when('/inventory', {
                templateUrl: 'app/controllers/inventory/inventory-view.html',
                controller: 'InventoryController'
            }).
            when('/customers', {
                templateUrl: 'app/controllers/customers/customer-view.html',
                controller: 'CustomersController'
            }).
            when('/settings', {
                templateUrl: 'app/controllers/settings/settings-view.html',
                controller: 'SettingsController'
            }).
            when('/', {
                templateUrl: 'app/controllers/auth/login-view.html',
                controller: 'AuthController'
            }).otherwise({
                redirectTo: '/'
            });

    }
]);