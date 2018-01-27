angular
    .module('starter.controllers')
    .controller('SeatLayoutCtrl', SeatLayoutCtrl)
function SeatLayoutCtrl($scope,$stateParams,$state,$ionicPopup) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUV'

    let bookingObj = JSON.parse($stateParams.booking);
    let seatLimit = bookingObj.seats;
    console.log(seatLimit);
    
    $scope.seats = {};
    $scope.seats.selectedSeats = [];
    $scope.seats.count = 0;
    $scope.seats.totalCost = 0;
    $scope.seats.limit = seatLimit;
    let costPerEachTicket = 100;

    $scope.rows = 10;
    $scope.coloumns = 10;

    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
          title: `Proceed to Payment`,
          template: `Are you sure you want to book ${$scope.seats.count} seats for  &#8377;${$scope.seats.totalCost}?`
        });
     
        confirmPopup.then(function(res) {
          if(res) {
            let paymentObj = {};
            paymentObj.seats = $scope.seats;
            paymentObj.booking = bookingObj;
            $state.go('app.payment',{
                payment:angular.toJson(paymentObj)
            });
            return;
          } else {
            console.log('You are not sure');
          }
        });
      };
    $scope.proceedToPayment = function () {

        $scope.showConfirm();
        // $state.go('app.payment',{
        //     payment:paymentObj
        // });
    }
    $scope.layout = [];
    $scope.color = '';
    $scope.select = function (seat) {
        
        let element = document.getElementById(seat);
        
        let color = element.style.backgroundColor;
        
        if(color!="green"){
            if($scope.seats.count + 1 > seatLimit){
                console.log('Limit Crossed');            
                return ;
            }
            element.style.backgroundColor = "green";
            $scope.seats.selectedSeats.push(seat);
            $scope.seats.count += 1;
            $scope.seats.totalCost += costPerEachTicket;
           
        } else {
            element.style.backgroundColor = "rgb(244, 246, 248)"   
            $scope.seats.count = $scope.seats.count - 1;  
            $scope.seats.totalCost -= costPerEachTicket;
            $scope.seats.selectedSeats = _.pull($scope.seats.selectedSeats,seat);
               
        }
        console.log(element.style.backgroundColor);
        
        
    }

    for (let i = 0; i < $scope.rows; i++) {
        for (let j = 0; j < $scope.coloumns; j++) {
            if ($scope.layout[i] == undefined) {
                $scope.layout[i] = [];
            }
            $scope.layout[i][j] = String(i) + alpha[j];
        }
    }
    //console.log($scope.layout);
   
    init();
    function init() {
        console.log("Seat Layout Ctrl Registered");
    }
}