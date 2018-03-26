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
function manageCtrl($http,$window,$scope,$timeout,$interval){
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
    
    manage.total=a+b+c+d+e;
    console.log(manage.total);
    
  }
 
  manage.labels=["Food", "Transport", "Grocery","Entertainment","Misclleneous"];
  manage.colors=["rgb(255,0,0)","rgb(0,100,0)","rgb(255,165,0)","rgb(255,215,0)","rgb(238,130,238)"];
  $interval(function () {
  manage.data = [];
  manage.data[0]=manage.food;
  manage.data[1]=manage.transport;
  manage.data[2]=manage.grocery;
  manage.data[3]=manage.entertainment;
  manage.data[4]=manage.misc;
  
}, 3000);
  manage.category=['Food','Transport','Grocery','Entertainment','Misclenneous'];
}
