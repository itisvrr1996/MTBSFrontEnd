angular
    .module('starter.controllers')
    .controller('SeatLayoutCtrl', SeatLayoutCtrl)
function SeatLayoutCtrl($scope) {
    init();
    function init() {
        console.log("Seat Layout Ctrl Registered");
    }
}