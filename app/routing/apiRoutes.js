var friends = require('../data/friends');

module.exports = function(app){
  app.get("/api", function(req, res) {

  });

  app.post('/api/friends', function(req,res){
    // console.log(res.body);
    // friends.push(res.body);
    console.log(req.body);
    // res.json(req);
    // res.redirect("/");
  });
};

//set content type? application/json ?
