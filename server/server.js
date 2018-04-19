var express=require("express");
var path= require("path");
var app=express();
var events=require('./eventsController')
var bodyparser=require("body-parser");
var rootPath=path.normalize(__dirname+'/../');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(rootPath+'\app'));
app.get("/data/json/:id",events.get);
app.post("/data/json/:id",events.save);
app.get("/data/json",events.getAll);
app.get('*',function(req,res){ res.sendFile(rootPath+'/app/index.html')});
app.listen(9002);
console.log("server is up and running");
