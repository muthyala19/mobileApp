var sampleApp = angular.module('sampleApp', []);
sampleApp.controller('AngularController', function ($scope, $location) {

    $scope.url = (window.location.href).split("page=")[1];
    if ($scope.url != null) {
        $scope.template = $scope.url + ".html";

    } else {
        $scope.template = "home.html";
    }

    console.log($scope.url);
    console.log($scope.template);
});