
angular
    .module('starter.controllers')
    .controller('AdminScreensCtrl', AdminScreensCtrl)
function AdminScreensCtrl($scope) {
    init();
    function init() {
        console.log("Admin Screens Registered");
    }
}