(function(){
var app=angular.module('app');
app.factory('mycache',function($cacheFactory){

    return $cacheFactory('mycache');
});

app.controller('cacheController',function($scope,mycache){
    $scope.add=function(key,value)
    {
        mycache.put(key,value);
    }
    $scope.getData=function(key)
    {
         return mycache.get(key);
    }
    $scope.getInfo=function()
    {
        return mycache.info();
    }
});
app.factory('mycache',function($cacheFactory){

    return $cacheFactory('mycache');
});

})();