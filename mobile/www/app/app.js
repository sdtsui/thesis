// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic'])

angular.module('app', [
  'ionic',
  'ui.utils',
  'app.services',
  'app.home',
  'app.courses',
  'app.times',
  'app.invite',
  'ngCordova'
])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/app.html'
  });

  $urlRouterProvider.otherwise('/tab/home');

})

.controller('MapController', function($scope, $ionicLoading) {
 // https://blog.nraboy.com/2014/10/implement-google-maps-using-ionicframework/
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
            // 37.784069, -122.407974
            var Location1 = new google.maps.Marker({
                position: new google.maps.LatLng(37.784069, -122.407974),
                map: map,
                title: "Marker1"
            });
            // 37.782289, -122.410742
            var Location2 = new google.maps.Marker({
                position: new google.maps.LatLng(37.782289, -122.410742),
                map: map,
                title: "Marker2"
            });

        });
 
        $scope.map = map;
    });
 
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
