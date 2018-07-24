var express = require("express");
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
var PORT = procces.env || 9090;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/*+json'}))
app.use(bodyParser.raw({type:'application/vnd.custom-type'}))
app.use(bodyParser.text({type:'text/html'}))

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./app/public/home.html"))
})
app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"./app/public/survey.html"))
})
app.get("/logo",function(req,res){
    res.sendFile(path.join(__dirname,"./app/public/logo.png"))
})
app.get("/api/friends",function(req,res){
    res.json(users)
})
var users=[];
app.post("/api/friends",function(req,res){
    var information = req.body;
    console.log("----------------------")
    console.log(information["useranswers[]"][0])

    console.log("----------------------")
    var differences=[];
    for (var x=0;x<9;x++){
        for (var i=0;i<9;i++){
            differences.push(users["useranswers[]"][1]-information["useranswers[]"][1]) 
        }
    }

    users.push(information)
    console.log(information)
    console.log(users)
    console.log("----------------------")

    
})
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });