angular
    .module('starter.controllers')
    .controller('PaymentPageCtrl', PaymentPageCtrl)
function PaymentPageCtrl($scope) {
    init();
    function init() {
        console.log("Payment Page Ctrl Registered");
    }
}