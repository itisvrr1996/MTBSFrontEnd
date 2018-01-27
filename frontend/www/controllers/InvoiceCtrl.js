angular
    .module('starter.controllers')
    .controller('InvoiceCtrl', InvoiceCtrl)
function InvoiceCtrl($scope,$state,$stateParams) {
    init();
    function init() {
        console.log("Invoice Ctrl Registered");
        
    }

    let invoice = JSON.parse($stateParams.invoice);
    console.log(invoice);
    
    $scope.seats = invoice.seats.selectedSeats;
    $scope.email = invoice.email;
}
