var app=angular.module('app',[]);
app.controller("mainController",function($scope){

$scope.event=[{
    name: "angular data camp",
    date:"22/11/2014",
    location:{city:"bangalore",
    pin:124001,street: "outer ring road"
    },
    imageUrl:"./images/angular.png",
    upvote:0,
    downvote:0
},{
    name: "node data camp",
    date:"27/11/2014",
    location:{city:"bangalore",
    pin:124001,street: "Mysuru road"
    },
    imageUrl:"./images/node.png",
    upvote:0,
    downvote:0
}]
$scope.upvote=function(session)
{
    session.upvote++;
}
$scope.downvote=function(session)
{
    session.downvote++;
}
});