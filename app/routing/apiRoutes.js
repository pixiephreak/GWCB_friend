var friends = require('../data/friends');

module.exports = function(app){
  app.get("/api", function(req, res) {

  });

  app.post('/api/friends', function(req,res){
    console.log(res);
    friends.push(res.body);
    res.json(friends);
    // res.redirect("/");
  });
};
