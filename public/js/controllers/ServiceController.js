'use strict';
angular.module('myApp').controller('ServiceController', ['$scope', function ($scope) {
    $scope.buttonValue = 'Services';
    $scope.btnService = function () {
        alert('You clicked on Services button');
    }
}]);