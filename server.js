// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// Specify the port.
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// Initiate the listener.
app.listen(port);
