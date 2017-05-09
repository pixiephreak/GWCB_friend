var friends = [];

var Friend = function(name, photo){
  this.name = name;
  this.photo = photo;
  this.scores = [];
  if (!(this instanceof Friend)) {
    return new Friend(front, back);
  }
};

Friend.prototype.totalScore = function(){};

var Question = function(question, score, answers){
  this.question = question;
  this.answers  = answers;
  this.onclick = function(){
    console.log(this);
  };
};

console.log('something');
