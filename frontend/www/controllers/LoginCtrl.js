angular
    .module('starter.controllers')
    .controller('LoginCtrl', LoginCtrl)
function LoginCtrl($scope) {
    init();
    function init() {
        console.log("Login Ctrl Registered");
    }

}