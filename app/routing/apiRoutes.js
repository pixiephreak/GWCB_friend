var friends = require('../data/friends');
var questions = require('../public/js/questions')

module.exports = function(app) {

  app.post("/api/friends", function(req, res) {
    console.log('posting');
    console.log(req.body);
    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = {
      name: "xxx",
      photo: "xxx",
      friendDifference: 1000
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference = 0;
    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i].name);
      totalDifference = 0;

      // We then loop through all the scores of each friend
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friends.push(userData);
    res.json(bestMatch);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

};

//set content type? application/json ?
