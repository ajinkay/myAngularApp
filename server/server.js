var express=require("express");
var path= require("path");
var app=express();
var rootPath=path.normalize(__dirname+'/../');
app.use(express.static(rootPath+'\app'));

app.listen(9002);
console.log("server is up and running");
