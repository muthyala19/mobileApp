var sampleApp = angular.module('sampleApp',[]);
sampleApp.controller('AngularController', function($scope,$location) {
    $scope.templates = [{
        url:'home.html'
    },
    {
        url:'about-us.html'
    }

]
   
    $scope.url = (window.location.href).split("page=")[1];
    console.log($scope.url);
    if($scope.url!=null && $scope.url == "home"){
        $scope.template = $scope.templates[0];
    }
    if($scope.url!=null && $scope.url == "about"){
        $scope.template = $scope.templates[1];
    }
});