var express = require("express");
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
var PORT = process.env.PORT || 9090;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/*+json'}))
app.use(bodyParser.raw({type:'application/vnd.custom-type'}))
app.use(bodyParser.text({type:'text/html'}))

app.use(express.static(path.join(__dirname, './app/public')));

// Routes statements
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
