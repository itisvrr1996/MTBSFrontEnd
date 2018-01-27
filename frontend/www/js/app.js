// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services',
'ngStorage','ionic-modal-select','ionic-datepicker','angularMoment'])
.config(function (ionicDatePickerProvider) {
  var datePickerObj = {
    inputDate: new Date(),
    titleLabel: 'Select a Date',
    setLabel: 'Set',
    todayLabel: 'Today',
    closeLabel: 'Close',
    mondayFirst: false,
    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    templateType: 'popup',
    from: new Date(2012, 8, 1),
    to: new Date(2018, 8, 1),
    showTodayButton: true,
    dateFormat: 'dd MMMM yyyy',
    closeOnSelect: false,
    disableWeekdays: []
  };
  ionicDatePickerProvider.configDatePicker(datePickerObj);
  
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists?playlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.adminDashboard',{
    url:'/admin',
    views:{
      'menuContent':{
        templateUrl:'templates/adminDashboardView.html',
        controller:'AdminDashboardCtrl'
      }
    }
  })
  .state('app.register',{
    url:'/register',
    views:{
      'menuContent':{
        templateUrl:'templates/registerView.html',
        controller:'RegisterCtrl'
      }
    }
  })
  .state('app.movies',{
    url:'/movies',
    views:{
      'menuContent':{
        templateUrl:'templates/moviesView.html',
        controller:'MoviesCtrl'
      }
    }
  })
  .state('app.movieDetail',{
    url:'/movieDetail/:movie',
    views:{
      'menuContent':{
        templateUrl:'templates/movieDetailView.html',
        controller:'MovieDetailCtrl'

      }
    }
  })
  .state('app.seatlayout',{
    url:'/seatlayout/:booking',
    views:{
      'menuContent':{
        templateUrl:'templates/seatLayoutView.html',
        controller:'SeatLayoutCtrl'
      }
    }
  })
  .state('app.payment',{
    url:'/payment/:payment',
    views:{
      'menuContent':{
        templateUrl:'templates/paymentPageView.html',
        controller:'PaymentPageCtrl'
      }
    }
  })
  .state('app.profile',{
    url:'/profile',
    views:{
      'menuContent':{
        templateUrl:'templates/profileView.html',
        controller:'ProfileCtrl'
      }
    }
  })
  .state('app.adminScreens',{
    url:'/adminScreen',
    views:{
      'menuContent':{
        templateUrl:'templates/adminScreensView.html',
        controller:'AdminScreensCtrl'
      }
    }
  })
  .state('app.adminShows',{
    url:'/adminShows',
    views:{
      'menuContent':{
        templateUrl:'templates/adminShowsView.html',
        controller:'AdminShowsCtrl'
      }
    }
  })
  .state('app.adminTheatres',{
    url:'/adminTheatres',
    views:{
      'menuContent':{
        templateUrl:'templates/adminTheatresView.html',
        controller:'AdminTheatresCtrl'
      }
    }
  })
  .state('app.invoice',{
    url:'/invoice/:invoice',
    views:{
      'menuContent':{
        templateUrl:'templates/invoiceView.html',
        controller:'InvoiceCtrl'
      }
    }
  })
  
  
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/register');
});
