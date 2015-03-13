var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl',  ['$scope', '$http',
    function ($scope, $http) {


    $http.get('data/imdb250.json').success(function(data){
        $scope.phones = data;
    });


    $scope.orderProp = 'rank';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('data/imdb250.json').success(function(data){
            $scope.phones = data;
        });
        $scope.rank = $routeParams.rank;
    }]);


phonecatControllers.controller('PhoneGalleryCtrl',  ['$scope', '$http',
    function ($scope, $http) {


    $http.get('data/imdb250.json').success(function(data){
        $scope.phones = data;
    });


    $scope.orderProp = 'All';
}]);

phonecatControllers.controller('PhoneLangCtrl',  ['$scope', '$http',
    function ($scope, $http) {


    $http.get('data/imdb250.json').success(function(data){
        $scope.phones = data;
    });


    var orderProp = $scope.orderProp = [];

     $scope.updateSelection = function($event, id) {

        var checkbox = $event.target;
        var action = (checkbox.checked ? 'add' : 'remove');
        if (action == 'add' & orderProp.indexOf(id) == -1) orderProp.push(id);
        if (action == 'remove' && orderProp.indexOf(id) != -1) orderProp.splice(orderProp.indexOf(id), 1);
    };

}]);