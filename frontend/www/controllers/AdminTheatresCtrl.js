angular
    .module('starter.controllers')
    .controller('AdminTheatresCtrl', AdminTheatresCtrl)
function AdminTheatresCtrl($scope) {
    init();
    function init() {
        console.log("Admin Theatres Registered");
    }
}