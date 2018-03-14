angular.module("app",['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/monthly.htm"
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
  manage.food=0.00;
  manage.transport=0.00;
  manage.grocery=0.00;
  manage.entertainment=0.00;
  manage.misc=0.00;
  manage.total=manage.food+manage.transport+manage.grocery+manage.entertainment+manage.misc;
  manage.changecurr=function(x){
    $window.localStorage.setItem('current_currency',manage.currency.indexOf(x));
    console.log(x);
    console.log(manage.currency.indexOf(x));
  };
  manage.addexpenses=function(a,b,c,d,e){
    manage.total=a+b+c+d+e;
    console.log(manage.total);
  }
}
