(function(){
var app=angular.module('app');
app.controller('editProfileController',function($scope,gravservice){


$scope.getGreveterUrl=function(email)
{
   return gravservice.getImage(email);
}

});

})();