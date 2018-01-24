angular
    .module('starter.controllers')
    .controller('InvoiceCtrl', InvoiceCtrl)
function InvoiceCtrl($scope) {
    init();
    function init() {
        console.log("Invoice Ctrl Registered");
    }
}
