$(document).ready(function() {

  var Friend = function(name, photo, scores, proximity) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.proximity = proximity;
    if (!(this instanceof Friend)) {
      return new Friend(name, photo, scores);
    }
  };

  Friend.prototype.totalScore = function() {};

  //send scores to server on submit
  document.getElementById('submit').onclick = function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var photo = document.getElementById('photo').value;
    var fieldsets = document.getElementsByTagName('fieldset');
    var length = fieldsets.length + 1;

    function storeScores() {
      var scores = [];
      for (let i = 1; i < length; i++) {
        //confirm that all fields are completed
        if (document.querySelector(`input[name = "answer${i}"]:checked`) != null) {
          //store scores in array
          var score = document.querySelector(`input[name = "answer${i}"]:checked`).value;
          scores.push(score);
        } else {
          alert("please complete all questions on the survey")
          break;
        }
      }
      return scores;
    }

    function storeProximity() {
      var proximity;
      for (let i = 1; i < length; i++) {
        //confirm that all fields are completed
        if (document.querySelector(`input[name = "proximity"]:checked`) != null) {
          //store scores in array
          proximity = document.querySelector(`input[name = "proximity"]:checked`).value;
        } else {
          alert("please choose your friend style")
          break;
        }
      }
      return proximity;
    }

    if (storeScores().length === 10) {
      newUser = new Friend(name, photo, storeScores(), storeProximity());
    }

    var currentURL = window.location.origin;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": currentURL + "/api/friends",
      "method": "POST",
      "dataType": "json",
      "headers": {
        "cache-control": "no-cache"
      },
      "data": JSON.stringify(newUser),
      "contentType": "application/json; charset=utf-8"
    };

    function append(data) {
      console.log(data);
      var h2 = document.createElement('h2');
      var pic = document.createElement('img');
      pic.setAttribute('src', data.photo);
      var results = document.createElement('p');
      h2.innerHTML = `Your Best Friend is: ${data.name}`;
      document.getElementById('friend').appendChild(h2);
      document.getElementById('photo').appendChild(pic);
      console.log('appending' + data.name);
    };

    if (newUser) {
      $.ajax(settings).done(function(response) {
        // console.log(response);
        append(response);
      }).fail(function() {
        alert("Sorry. Server unavailable. ");
      });

    };
  };
});
