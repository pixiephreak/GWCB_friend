// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // app.get("/survey", function(req, res) {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });

  app.get("/", function(req, res) {
    console.log('dirname', __dirname);
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
  // // If no matching route is found default to home
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/index.html"));
  // });

};
