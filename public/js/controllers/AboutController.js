'use strict';
angular.module('myApp').controller('AboutController', ['$scope',function ($scope) {
    $scope.buttonValue = 'About';
    $scope.btnAbout = function () {
        alert("You clicked on About Button");
    }
}]);