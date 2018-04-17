(function(){
    var app=angular.module('app');
    app.controller("eventsDetailController",function($scope,eventData){
   
   
    eventData.getAllEvents().then(function(a)
    {
        console.log(a);
        $scope.events=a;
    }).catch(function(c){
        console.log(error);
    });
    
   
    });
    })();