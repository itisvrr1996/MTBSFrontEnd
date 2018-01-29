angular
    .module('starter.controllers')
    .controller('PaymentPageCtrl', PaymentPageCtrl)
function PaymentPageCtrl($scope,$stateParams,$state) {
    init();
    let paymentObj = JSON.parse($stateParams.payment);
    console.log(paymentObj);
    $scope.email = {};
    $scope.isConfirmed = true;
    $scope.check = true;
    $scope.data = {}
    $scope.paymentMethod = 'Select Payment Method';
    $scope.paymentMethods = [
        'NetBanking',
        'Credit Card',
        'Debit Card',
        'Wallets'
    ]
    
    function init() {
        console.log("Payment Page Ctrl Registered");
    }
    $scope.submit = function () {
        let invoiceObj = {};
        invoiceObj.email = $scope.email;
        invoiceObj.seats = paymentObj.seats;
        $state.go('app.invoice',{
            invoice:angular.toJson(invoiceObj)
        })
    }
}