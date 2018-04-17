(function(){
    
var app=angular.module('app');
app.controller('editFormController',function($scope,eventData){
$scope.saveData=function(event,newForm){
    if(newForm.$valid)
    {
        eventData.save(event);

    }
}
$scope.cancel=function()
{
    console.log("here");
    window.location="./eventDetail.html";
}
});


})();
