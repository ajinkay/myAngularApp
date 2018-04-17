(function(){
var app=angular.module('app');
app.controller("mainController",function($scope,eventData,$log,$resource,$anchorScroll,){
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
eventData.getEventData().then(function(a)
{
    console.log(a);
    $scope.event=a;
}).catch(function(c){
    sonsole.log(error);
});
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