angular
.module('starter.controllers')
.controller('ProfileCtrl', ProfileCtrl)
function ProfileCtrl($scope) {
init();
function init() {
    console.log("Profile Ctrl Registered");
}
}