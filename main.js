const app = angular.module('app', ['ngRoute'])

app
.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "views/home.html",      
      controller: "home"
    })
    .when("/intro", {
      templateUrl: "views/intro.html"
    })
    .when("/login", {
      templateUrl: "views/login.html",
      controller: 'loginController'
    })
    .when("/course", {
      templateUrl: "views/course.html",
      controller: 'course'
    })
    .otherwise({
      redirectTo: '/home'
    })
})
.controller('course', async ($scope, $rootScope, $http) => {
  $rootScope.title = "Course"
  await $http.get('data/Subjects.js')
  .then(res => $scope.subjects = res.data)
  $(document).ready(function(){
    $('.subjects').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      // rows: 2,
      // slidesPerRow: 2      
    });
  });
})
.controller('home', ($rootScope) => {
  $rootScope.title = 'Home'  
})
