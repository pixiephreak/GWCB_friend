var questions = require('../data/questions');

module.exports = function(app){
  app.get("/index", function(req, res) {
      res.render('index', {ques: questions});
  });
};
