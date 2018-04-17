(function(){

    var app=angular.module('app');
  
    app.controller('compileController',function($compile,$scope,$parse,$locale,$interval,$filter,$cookies){
        try{
        $scope.appendData=function(ele){
                return $compile(ele)($scope).prependTo(angular.element('#root'));
        }
         /*  var getter=$parse('1+2');
           console.log(getter());
           var get1=$parse('event.name');
          var context1={event:{name:"angular js boot camp"}};
          var  context2={event:{name:"angular js boot camp2 "}};
            console.log(get1(context1));
            console.log(get1(context2));
            var setter =get1.assign;
            setter(context2,'node js');
            console.log(get1(context2));
            $scope.mydate=127;*/
           $locale.NUMBER_FORMATS.CURRENCY_SYM='rs';
           // console.log($locale.NUMBER_FORMATS.CURRENCY_SYM);
$scope.name=0;
          var promise=  $interval(function(){
                $scope.name++;
            },3000);
            $scope.cancel=function()
            {
                $interval.cancel(promise);
            }
            
    }
    catch(e)
    {
        console.log(e.message +" in catch")
    }

var d=$filter('myFilter');
$scope.data1=d(1);
$scope.data2=d(2);
$scope.data3=d(6);
$scope.cookieEvent="kxip vs csk";   
var cookieData={event:$scope.cookieEvent};
$scope.addCookie=function()
{
    $cookies.putObject('event',cookieData);
}
$scope.getCookie=function()
{
    console.log($cookies.getObject('event'));
}
$scope.removeCookie=function()
{
    $cookies.remove('event');
}
});

})();