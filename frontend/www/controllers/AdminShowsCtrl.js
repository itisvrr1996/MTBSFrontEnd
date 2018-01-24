angular
    .module('starter.controllers')
    .controller('AdminShowsCtrl', AdminShowsCtrl)
function AdminShowsCtrl($scope) {
    init();
    function init() {
        console.log("Admin Shows Registered");
    }
}