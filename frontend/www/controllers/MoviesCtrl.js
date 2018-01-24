angular
    .module('starter.controllers')
    .controller('MoviesCtrl', InvoiceCtrl)
function InvoiceCtrl($scope) {
    init();
    function init() {
        console.log("Movies Ctrl Registered");
    }
}