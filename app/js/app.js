(function(){

    angular.module('app',['ngSanitize','ngResource','ngRoute']).config(function($routeProvider){

$routeProvider.when('/addEvent',{

    templateUrl:"templates/editEvent.html",
    controller:"editFormController"
}).when('/events',{

    templateUrl:"templates/eventList.html",
    controller:"eventsDetailController"
}).when('/addEvent',{

    templateUrl:"templates/editUser.html",
    controller:"editProfileController"
}).when('/event/:eventId',{

    templateUrl:"templates/event.html",
    controller:"eventController",
    resolve:{
        event: function($route,eventData)
        {
                eventData.getEventData($route.current.pathParams.eventId);
        }
    }
})
.otherwise({redirectTo:'\events'});

    });
})();