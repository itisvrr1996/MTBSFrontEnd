angular
    .module('starter.controllers')
    .controller('RegisterCtrl', RegisterCtrl)
function RegisterCtrl($scope) {
  
    init();
    $scope.f = {};
    $scope.loginData = {};
  
    $scope.submit = function () {
        console.log($scope.f.myform);
      
    }
    function init() {
        
    }
    
}