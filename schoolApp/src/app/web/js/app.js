var sampleApp = angular.module('sampleApp',[]);
sampleApp.controller('AngularController', function($scope,$location) {
    $scope.templates = {
    "home":{
        url:'home.html'
    },
    "about":{
        url:'about-us.html'
     },
  
    // {
    //     url:'gallery.html'
    // },
    // {
    //     url:'contact.html'
    // },
    // {
    //     url:'ielts.html'
    // },
    // {
    //     url:'pte.html'
    // },
    // {
    //     url:'sat.html'
    // }
    // ,
    // {
    //     url:'toefl.html'
    // } ,
    // {
    //     url:'gre.html'
    // },
    // {
    //     url:'gmat.html'
    // },
    // {
    //     url:'study-in-usa.html'
    // }

    }





   
    $scope.url = (window.location.href).split("page=")[1];
    console.log($scope.url);
    if($scope.url!=null && $scope.url == "home"){
        $scope.template = $scope.templates[0];
    }
    if($scope.url!=null && $scope.url == "about"){
        $scope.template = $scope.templates[1];
    }
 
    if($scope.url!=null && $scope.url == "gallery"){
        $scope.template = $scope.templates[2];
    }
    if($scope.url!=null && $scope.url == "contact"){
        $scope.template = $scope.templates[3];
    }
    if($scope.url!=null && $scope.url == "ielts"){
        $scope.template = $scope.templates[4];
    }
    if($scope.url!=null && $scope.url == "pte"){
        $scope.template = $scope.templates[5];
    }
    if($scope.url!=null && $scope.url == "sat"){
        $scope.template = $scope.templates[6];
    }
    if($scope.url!=null && $scope.url == "toefl"){
        $scope.template = $scope.templates[7];
    }
    if($scope.url!=null && $scope.url == "gre"){
        $scope.template = $scope.templates[8];
    }
    if($scope.url!=null && $scope.url == "gmat"){
        $scope.template = $scope.templates[9];
    }
    if($scope.url!=null && $scope.url == "study-in-usa"){
        $scope.template = $scope.templates[10];
    }


});





