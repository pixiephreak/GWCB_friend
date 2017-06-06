var friends = require('../data/friends');
var questions = require('../public/js/questions')

module.exports = function(app){

    app.post("/api/friends", function(req, res) {
      console.log('posting');
      console.log(req.body);
      // We will use this object to hold the "best match". We will constantly update it as we
      // loop through all of the options
      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      };

      // Here we take the result of the user"s survey POST and parse it.
      var userData = req.body;
      var userScores = userData.scores;

      // var newFriend = req.body;
      // friends.push(newFriend);
      res.send(req.body);
    });

    app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

};

//set content type? application/json ?
