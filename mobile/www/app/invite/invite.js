angular.module('app.invite', [])

.config(function($stateProvider) {
  $stateProvider
  .state('tab.invite', {
    url: '/invite/:courseId/:teeTime/:teeTimeId',
    views: {
      'invite-tab': {
        templateUrl: 'app/invite/invite.html',
        controller: 'InviteIndexCtrl as vm'
      }
    }
  });
})

.controller('InviteIndexCtrl', function($stateParams, CourseService, $cordovaToast) {
  var vm = this;
  vm.course = CourseService.get($stateParams.courseId);
  vm.teeTime = $stateParams.teeTime;
  vm.userInfo = {};
  var teeTimeId = $stateParams.teeTimeId;

  vm.bookTime = function(){
    console.log("BOOKTIME");

    var userInfo = {
      userName    : vm.userInfo.userName,
      userNumber  : vm.userInfo.userNumber
    };
    // CourseService.bookTime(userInfo, teeTimeId);
    // $cordovaToast.show("Kick ass, chew bubblegum...", short, 'bottom')
    //   .then(function(success){
    //     console.log("Toast, success : ", success);
    //   }, function(error){
    //     console.log("Toast, error : ", error);
    //   });
  };


  vm.showToast = function(message, duration, location){
    console.log("showing some toasts...");
    // https://github.com/driftyco/ng-cordova/issues/188
    $cordovaToast.show(message, duration, location)
      .then(function(success){
        console.log("Toast, success : ", success);
      }, function(error){
        console.log("Toast, error : ", error);
      });
  };
});
