angular
    .module('starter.controllers')
    .controller('MovieDetailCtrl', MovieDetailCtrl)
function MovieDetailCtrl($scope, $state, $ionicHistory, $stateParams, ionicDatePicker) {

    $scope.movie = JSON.parse($stateParams.movie);
    console.log($scope.movie);
    $scope.GoBack = function () {
        $ionicHistory.goBack();
    }
    var ipObj1 = {
        callback: function (val) { 
            $scope.selectedDate = new Date(val);
            $scope.selectedTheatres = $scope.theatres;
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        }
    }
    $scope.openDatePicker = function () {
        ionicDatePicker.openDatePicker(ipObj1);
    };
    $scope.seats = 0;

    $scope.showSeats = function (theatre,date) {
        let bookingObj = {};
        bookingObj.movie = $scope.movie;
        bookingObj.theatre = theatre;
        bookingObj.date = date;
        bookingObj.seats = $scope.seats;
        console.log(bookingObj);
        $state.go('app.seatlayout',{
            booking:angular.toJson(bookingObj)
        });
        
    }
    init();
    function init() {
        console.log("Movie Detail Registered");
    }

    $scope.theatres = [{"theatreName":"Pennsylvania","showTimes":[{"date":"2017-03-19 19:49:23"},{"date":"2017-06-24 02:22:55"},{"date":"2017-12-01 09:36:14"}]},
    {"theatreName":"Pankratz","showTimes":[{"date":"2017-06-22 17:08:27"},{"date":"2017-02-27 12:15:37"},{"date":"2017-09-15 11:25:16"}]},
    {"theatreName":"Bayside","showTimes":[{"date":"2017-11-25 03:04:52"},{"date":"2017-09-14 07:28:11"},{"date":"2017-11-23 16:05:11"},{"date":"2018-01-12 17:52:10"}]},
    {"theatreName":"Reindahl","showTimes":[{"date":"2017-05-05 16:43:19"},{"date":"2017-09-30 08:17:32"},{"date":"2017-12-22 05:02:05"}]},
    {"theatreName":"Thierer","showTimes":[{"date":"2017-09-12 04:57:07"},{"date":"2017-11-29 13:57:34"},{"date":"2017-10-29 07:45:49"},{"date":"2017-06-18 09:49:53"}]},
    {"theatreName":"Washington","showTimes":[{"date":"2017-07-02 17:07:21"},{"date":"2017-03-23 07:48:21"},{"date":"2017-05-13 13:19:13"}]},
    {"theatreName":"4th","showTimes":[{"date":"2017-11-16 19:20:57"}]},
    {"theatreName":"Longview","showTimes":[{"date":"2017-02-13 08:36:33"},{"date":"2017-06-08 20:22:20"},{"date":"2017-07-09 06:29:58"},{"date":"2017-03-23 11:14:33"}]},
    {"theatreName":"Mosinee","showTimes":[{"date":"2017-12-07 00:41:04"},{"date":"2017-05-29 04:21:20"},{"date":"2017-04-13 20:27:34"}]},
    {"theatreName":"Duke","showTimes":[{"date":"2017-05-30 01:50:32"},{"date":"2017-04-04 13:45:37"}]}]

    $scope.selectedTheatres = [];
}