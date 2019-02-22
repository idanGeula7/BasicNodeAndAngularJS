/* eslint-disable linebreak-style */
"use strict";
let app = angular.module("App", []);

app.controller("Ctrl", ["$scope", ($scope) => {

    $scope.init = () => {
        $scope.testVar = "idan";
    };
}]);