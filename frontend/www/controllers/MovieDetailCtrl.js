angular
    .module('starter.controllers')
    .controller('MovieDetailCtrl', MovieDetailCtrl)
function MovieDetailCtrl($scope) {
    init();
    function init() {
        console.log("Movie Detail Registered");
    }
}