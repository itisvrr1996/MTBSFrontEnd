
angular
    .module('starter.controllers')
    .controller('AdminDashboardCtrl', AdminDashboardCtrl)
function AdminDashboardCtrl($scope) {
    $scope.title = "Admin Dashboards";
    $scope.loginData = {
        username:'',
        password:''
    }
    $scope.token = {}
    $scope.submit = function(){
        console.log($scope.loginData);
    }
    $scope.validateEmail = function(){
        console.log("OPTIONS REQUEST SENT");
        $scope.token = 'asdfsdafasdf';
    }
    init();
    function init() {
        console.log("Admin Dashboard Registered");
    }
}