$(document).ready(function() {
  var id = 0;
  var Friend = function(name, photo, scores, proximity, id, contact) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.proximity = proximity;
    this.id = id;
    this.contact = contact;
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
    var contact = document.getElementById('contact').value;
    var fieldsets = document.getElementsByTagName('fieldset');
    var length = fieldsets.length + 1;

    function storeScores() {
      var scores = [];
      if (document.getElementById('name').value != "" && document.getElementById('photo').value != "" && document.getElementById('contact').value != ""){
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
      }else{
        alert("make sure you've provided a name, photo, and way to contact you.")
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
      newUser = new Friend(name, photo, storeScores(), storeProximity(), id, contact);
      console.log(newUser);
      id++;
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
      console.log(data)
      $('#friend').empty();
      $('#friend-photo').empty();
      $('#friend-contact').empty();
      console.log(data);
      var h2 = document.createElement('h2');
      var pic = document.createElement('img');
      var contact = document.createElement('p');
      pic.setAttribute('src', data.photo);
      pic.setAttribute('class', "responsive-img circle z-depth-5");
      var results = document.createElement('p');
      h2.innerHTML = `Your Best Friend is: ${data.name}`;
      contact.innerHTML = `You can contact ${data.name} using ${data.contact}`;
      document.getElementById('friend').appendChild(h2);
      document.getElementById('friend-photo').appendChild(pic);
      document.getElementById('friend-contact').appendChild(contact);
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
