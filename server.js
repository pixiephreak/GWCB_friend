// Dependencies
var express = require("express");
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// Specify the port.
var port = 3000;

app.use(express.static('client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//api routes
//require friends data for use in get
var friends = require('./app/data/friends');

app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

app.post("/api/friends", function(req,res){
  res.json(req.body);
  friends.push(req.body);
});



// Initiate the listener.
app.listen(port);
