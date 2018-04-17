(function(){
var app=angular.module('app');
app.factory('eventData',function($resource,$http){

    return {
        getEventData:function()
        {
             return $resource("/data/json/:id",{id:'@id'}).get({id:1}).$promise;
        },
        save: function(event){
                
             
                return $resource("/data/json",{"getAll": {method: "GET", isArray: true,}}).query().$promise.then(function(a) {
                /* var hid=0;
                 console.log(a);
                  $.each(a,function(index,item){
                    console.log(item);
                    console.log(item.id);
                      hid=(item.id>hid)?item:hid;
                      console.log(hid);
                  });  
                  console.log(hid);*/
                  var hid=0;
                  
                  $.each(a,function(index,item){
                   
                      hid=(item.id>hid)?item.id:hid;
                     
                  }); 
                  console.log(typeof(hid));
                   event.id=hid+1;
                   return $resource("/data/json/:id",{id:'@id'}).save(event).$promise;
                    
                  }).then(function(a){
                    //console.log(a);
                    console.log("success");

                  }).catch(function(b){console.log("error")}); ;;
        }
    }
  
});

})();