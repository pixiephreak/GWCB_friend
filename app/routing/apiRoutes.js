var friends = require('../friends');

module.exports = function(app){
  app.get("/api", function(req, res) {

  });

  app.post('/api/friends', function(req,res){
    console.log(friends);
    friends.push(req.query);
    res.json(friends);
    // res.redirect("/");
  });
};
