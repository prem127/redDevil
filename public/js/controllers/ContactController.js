'use strict';
angular.module('myApp').controller('ContactController', ['$scope', function ($scope) {
    $scope.buttonValue = 'Contact Us';
    // $scope.inputMobile = '';
    // $scope.changeMobile = function(){
    //         if($scope.inputMobile){
    //             alert($scope.inputMobile);
    //         }
    // };
    $scope.btnContact = function () {
        alert('You clicked Contact Button');
    }
}]);