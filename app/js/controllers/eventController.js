(function(){
var app=angular.module('app');
app.controller("eventController",function($scope,eventData,$log,$resource,$anchorScroll,$routeParams,$route){
$scope.sortData="-name";
$scope.filterData="";
$scope.scrollDown=function()
{
  
    
$anchorScroll([1]);
}
/* $http solution
eventData.getEventData().then(function(x)
{
   
  $scope.event=x.data;
        
}).catch(function(x)
{
console.log('data');
$log.warn(x.status);
$log.warn(x.data);

});*/
$scope.event=$route.current.locals.event;
$scope.upvote=function(session)
{
    session.upVoteCount++;
}
$scope.downvote=function(session)
{
    session.downVoteCount++;
}
$scope.bool="bool";
});
})();