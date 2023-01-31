(function () {
    'use strict';
    
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function () {
            var dishesNo = $scope.dishes.split(",").length;

            if ($scope.dishes == "") {
                $scope.message = "Please enter data first";
            } else if (dishesNo <= 3) {
                $scope.message = "Enjoy!"
            } else {
                $scope.message = "Too much!"
            }
        }
    }
    })();