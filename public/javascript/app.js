angular.module("app",['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/today.htm"
    })
    .when("/monthly", {
        templateUrl : "templates/monthly.htm"
    })
    .when("/addexpenses", {
        templateUrl : "templates/addexpenses.htm"
    })
    .when("/settings", {
        templateUrl : "templates/settings.htm"
    });
})
.controller("manageCtrl",manageCtrl)
function manageCtrl($http,$window){
  var manage=this;
  manage.array=['fruit','vegetable','pulses'];
  manage.currency=['INR(₹)','U.S. Dollar($)','Pound(£)','Euro(€)','Yen(¥)'];
  $window.localStorage.setItem('current_currency',0);
  manage.curr_val=$window.localStorage.getItem('current_currency');
  manage.changecurr=function(x){
    $window.localStorage.setItem('current_currency',manage.currency.indexOf(x));
    console.log(x);
    console.log(manage.currency.indexOf(x));
  };
}
