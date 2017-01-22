'use strict';

app.factory('authService', [
    '$http',
    'baseServiceUrl',
    function ($http, baseServiceUrl) {
        return {
            login: function (userData, success, error) {
                let request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/login',
                    data: userData
                };

                $http(request).success(function (data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },
            register: function (userData, success, error) {
                let request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/register',
                    data: userData
                };

                $http(request).success(function (data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },
            logout: function () {
                delete sessionStorage['currentUser'];
            },
            getCurrentUser: function () {
                let userObject = sessionStorage['currentUser'];
                if (userObject) {
                   return JSON.parse(sessionStorage['currentUser']);
                }
            },
            isAnonymous: function () {
                return sessionStorage['currentUser'] == undefined;
            },
            isLoggedIn: function () {
                return sessionStorage['currentUser'] != undefined;
            },
            isNormalUser: function () {
                let currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (!currentUser.isAdmin);
            },
            isAdmin: function () {
                let currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (currentUser.isAdmin);
            },
            getAuthHeaders: function () {
                let headers = {};
                let currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }

                return headers;
            }
        }
    }
]);