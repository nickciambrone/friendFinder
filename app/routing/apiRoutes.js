require('../../server.js');

var friendsArray = require("../data/friends");


module.exports = function (app) {



    app.get("/api/friends", function (req, res) {
        res.json(users)
    })
    var users = [];
    app.post("/api/friends", function (req, res) {
        var information = req.body;

        users.push(information)
        console.log(information)
        console.log("----------------------")
        console.log(users)
        console.log("----------------------")


        var x;
        var differences = [];


        for (var i = 0; i < users.length - 1; i++) {
            var difference = 0;
            for (var x = 0; x < 10; x++) {
                if (parseInt(users[i].useranswers[x]) >= parseInt(information.useranswers[x])) {
                    difference += parseInt(users[i].useranswers[x]) - parseInt(information.useranswers[x])
                }
                else {
                    difference += parseInt(information.useranswers[x]) - parseInt(users[i].useranswers[x])
                }

            }
            differences.push(difference)
        }
        console.log(differences)
        //find the index of the differences array with the lowest value
        var index = 0;
        var value = differences[0];
        for (var i = 1; i < differences.length; i++) {
            if (differences[i] < value) {
                value = differences[i];
                index = i;
            }
        }
        console.log(index)
        console.log(value)
        
        res.send("You are the most alike with: "+users[index].username)
        
    })


};
