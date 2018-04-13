(function(){
var app=angular.module('app',['ngSanitize']);
app.controller("mainController",function($scope){
$scope.sortData="-name";
$scope.filterData="";
$scope.event=[{
    name: "Angular  data camp",
    date:new Date(),
    location:{city:"bangalore",
    pin:124001,street: "outer ring road"
    },
    imageUrl:"img/angular.png",
    upvote:0,
    downvote:0,
    lang:"angular",
    time: 1
},{
    name: "Node data camp",
    date:"27/11/2014",
    location:{city:"bangalore",
    pin:124001,street: "Mysuru road"
    },
    imageUrl:"img/node.png",
    upvote:0,
    downvote:0,
    lang:"node",
    time:2
}]
$scope.upvote=function(session)
{
    session.upvote++;
}
$scope.downvote=function(session)
{
    session.downvote++;
}
$scope.bool="bool";
});
})();