
var friends = require('../data/friends');
var bestMatch = {
  name: "xxx",
  photo: "xxx",
  friendDifference: 1000
};
var findProximity = function(arr,scores, evaluation){

  function update(){
    bestMatch.name = arr[i].name;
    bestMatch.photo = arr[i].photo;
    bestMatch.contact = arr[i].contact;
    bestMatch.friendDifference = totalDifference;
  }

  // TODO fix algorithm
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name, arr[i].proximity);
    totalDifference = 0;

    // We then loop through all the scores of each friend
    for (var j = 0; j < arr[i].scores[j]; j++) {

      // We calculate the difference between the scores and sum them into the totalDifference
      totalDifference += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));
      console.log('difference'+totalDifference);
      // If the sum of differences is less then the differences of the current "best match"

      if(evaluation === 'similar'){
        if (totalDifference <= bestMatch.friendDifference) {
          // Reset the bestMatch to be the new friend.
          update();
        }
      }

      if(evaluation === 'somewhat-similar'){
        if (totalDifference <= (bestMatch.friendDifference + 2)) {
          // Reset the bestMatch to be the new friend.
          update();
        }
      }

      if(evaluation === 'different'){
        bestMatch.friendDifference = 0;
        if (totalDifference >= bestMatch.friendDifference) {
          // Reset the bestMatch to be the new friend.
          update();
        }
      }
    }
  }
};

module.exports = function(app) {

  app.post("/api/friends", function(req, res) {
    console.log('posting');
    console.log(req.body);
    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;
    var proximity = userData.proximity;
    var totalDifference = 0;
      findProximity(friends, userScores, proximity);
      friends.push(userData);
      res.json(bestMatch);

  });

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

};



//set content type? application/json ?
