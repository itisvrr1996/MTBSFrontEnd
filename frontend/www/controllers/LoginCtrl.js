angular
    .module('starter.controllers')
    .controller('LoginCtrl', LoginCtrl)
function LoginCtrl($scope,AuthService) {
    init();
    function init() {
        console.log("Login Ctrl Registered");
    }

    
}