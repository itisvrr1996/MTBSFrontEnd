angular
    .module('starter.controllers')
    .controller('RegisterCtrl', RegisterCtrl)
function RegisterCtrl($scope,$state,AuthService,$localStorage) {
  
    init();
    $scope.f = {};
    $scope.loginData = {};
  
    $scope.submit = function () {
        
      if($scope.f.myform.$valid){
          let form = $scope.loginData;
          if(AuthService.register(form.email,form.firstName,form.lastName,form.password,form.reTypePassword)){
                console.log('Registerd',AuthService.user);
                $scope.loginData = {};
                $state.go('app.movies');
          } else {
              console.log('not registerd');
          }
      } else {
          console.log('invalid');
      }
      
    }
    function init() {
        if($localStorage.user!=undefined){
            $state.go('app.movies');
        }
        
    }
    
}