'use strict';

app.factory('userService', [
    '$http',
    'baseServiceUrl',
    'authService',
    function ($http, baseServiceUrl, authService) {
        return {
            createNewAd: function (adData, success, error) {
                let request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                
                $http(request).success(success).error(error);
            },
            getUserAds: function (params, success, error) {
                let request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                
                $http(request).success(success).error(error);
            },
            deativateAd: function (id, success, error) {
                
            },
            publishAgainAd: function (id, success, error) {
                
            }
        }
    }
]);