var express = require('express');
var bp = require('body-parser');
var exphbs = require('express-handlebars');

// Create an instance of the express app.
var app = expres();

// Specify the port.
var port = 3050;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
