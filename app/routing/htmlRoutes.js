require('../../server.js');
var path = require("path");


// export these routes for the server
module.exports = function(app) {

// These are all html get request routes

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });



app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"))
})
app.get("/logo",function(req,res){
    res.sendFile(path.join(__dirname,"../public/logo.png"))
})


};