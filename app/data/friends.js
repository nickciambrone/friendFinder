require("../routing/apiRoutes.js")
require("../../server.js")
module.exports=function(app){
    app.get("/api/friends", function (req, res) {
        res.json(users)
    })
}
