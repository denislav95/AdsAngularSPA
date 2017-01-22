'use strict';

app.factory('adsService', [
    '$resource',
    'baseServiceUrl',
    'pageSize',
    function ($resource, baseServiceUrl, pageSize) {
        let adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': {
                    method: 'GET'
                }
            }
        );

        let paginationResource = $resource(
            baseServiceUrl + '/api/ads?pageSize=' + pageSize + '&startPage=' + 1,
            null,
            {
                'getPagination': {
                    method: 'GET'
                }
            }
        );

        return{
            getAds: function (params, success, error) {
                return adsResource.getAll(params, success, error);
            },
            adsParams: function (params, success, error) {
                return paginationResource.getPagination(params, success, error);
            }
        };
    }
]);

app.factory('townsService', [
    '$resource',
    'baseServiceUrl',
    function ($resource, baseServiceUrl) {
        let towsResource = $resource(
            baseServiceUrl + '/api/towns'
        );
        return{
            getTowns: function (success, err) {
                return towsResource.query(success, err);
            }
        };
    }
]);

app.factory('categoriesService', [
    '$resource',
    'baseServiceUrl',
    function ($resource, baseServiceUrl) {
        let categoriesResource = $resource(
            baseServiceUrl + '/api/categories'
        );
        return{
            getCategories: function (success, err) {
                return categoriesResource.query(success, err);
            }
        };
    }
]);