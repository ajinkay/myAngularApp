(function(){
var app=angular.module('app');

app.filter('myFilter',function(){

return function(data){

 switch(data)
 {
        case 1:
               return '1 hour';
        case 2:
                return 'half day';
        default:
                return 'full day';


 }
     


}

});
})();