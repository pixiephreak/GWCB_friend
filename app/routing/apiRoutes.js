var friends = require('../data/friends');
var questions = require('../public/js/questions')

module.exports = function(app){

    app.post("/api/friends", function(req, res) {
      // console.log(req.body);
      var newFriend = req.body;
      friends.push(newFriend);
      res.send(req.body);
    });

    app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

};

//set content type? application/json ?
