angular
    .module('starter.controllers')
    .controller('RegisterCtrl', RegisterCtrl)
function RegisterCtrl($scope,$state,AuthService,$localStorage) {
  
 
    
    if($localStorage.user){
        $state.go('app.movies');
    }
    init();
    $scope.f = {};
    $scope.loginData = {};
  
    $scope.submit = function () {
        
      if($scope.f.myform.$valid){
          let form = $scope.loginData;
        console.log(form);
        
         AuthService.register(form).then((data)=>{
            $state.go('app.movies');
            $localStorage.set('user',data);
         });
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
