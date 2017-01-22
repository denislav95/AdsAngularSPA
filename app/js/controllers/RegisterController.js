'use strict';

app.controller('RegisterController', [
    '$scope',
    '$location',
    'authService',
    'notifyService',
    'townsService',
    function ($scope, $location, authService, notifyService, townsService) {
        $scope.towns = townsService.getTowns();
        $scope.userData = {
          townId: null
        };

        $scope.register = function (userData) {
            authService.register(userData, function success() {
                notifyService.showInfo('Registration successful!');
                $location.path('/');
            },
            function error(err) {
                notifyService.showError('User registration failed', err);
            });
        }
    }
]);