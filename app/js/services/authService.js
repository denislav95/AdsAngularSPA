'use strict';

app.factory('authService', [
    '$http',
    'baseServiceUrl',
    function ($http, baseServiceUrl) {
        return {
            login: function (userData, success, error) {

            },
            register: function (userData, success, error) {

            },
            logout: function () {

            },
            getCurrentUser: function () {

            },
            isAnonymous: function () {

            },
            isLoggedIn: function () {

            },
            isNormalUser: function () {

            },
            isAdmin: function () {

            },
            getAuthHeaders: function () {

            }
        }
    }
]);