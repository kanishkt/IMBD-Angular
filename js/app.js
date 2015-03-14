var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'ngAnimate']);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/detail/:rank', {
                templateUrl: 'partials/details.html',
                controller: 'PhoneDetailCtrl'
            }).
             when('/gallery', {
                templateUrl: 'partials/gallery.html',
                controller: 'PhoneGalleryCtrl'
            }).
             when('/lang', {
                templateUrl: 'partials/lang.html',
                controller: 'PhoneLangCtrl'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);

var myApp = angular.module('myApp', []);

myApp.controller('PhoneCityCtrl',  ['$scope', '$http',
    function ($scope, $http) {

    $http.get('data/state_city.json').success(function(data){
        $scope.phones = data;
    });
}]);