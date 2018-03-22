angular.module("app",['ngRoute','chart.js'])
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
  $window.localStorage.setItem('current_currency',1);
  manage.curr_val=$window.localStorage.getItem('current_currency');
 

  manage.changecurr=function(x){
    $window.localStorage.setItem('current_currency',manage.currency.indexOf(x));
    console.log(x);
    console.log(manage.currency.indexOf(x));
    manage.sel_curr="";
  };
  manage.addexpenses=function(a,b,c,d,e){
    manage.total1=a+b+c+d+e;
    console.log(manage.total);
  }
  manage.labels=["Food", "Transport", "Grocery"];
  manage.data = [300, 500, 100];
}
