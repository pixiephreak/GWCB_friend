
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

var questionsArr = [];

questions.forEach(question => questionsArr.push(new Question(question.question, question.score, question.answers)));
questionsArr;

$(".submit").on("click", function(event) {
      event.preventDefault();

      // Here we grab the form elements
      var newReservation = {
        customerName: $("#reserve-name").val().trim(),
        phoneNumber: $("#reserve-phone").val().trim(),
        customerEmail: $("#reserve-email").val().trim(),
        customerID: $("#reserve-unique-id").val().trim()
      };

      console.log(newReservation);

      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.

      $.post("/api/friends", newReservation,
        function(data) {

          // If a table is available... tell user they are booked.
          if (data) {
            alert("Yay! You are officially booked!");
          }

          // If a table is available... tell user they on the waiting list.
          else {
            alert("Sorry you are on the wait list");
          }

          // Clear the form when submitting
          $("#reserve-name").val("");
          $("#reserve-phone").val("");
          $("#reserve-email").val("");
          $("#reserve-unique-id").val("");

        });

    });

    //function to get and show
    function runTableQuery() {

        // Here we get the location of the root page.
        // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
        var currentURL = window.location.origin;

        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.ajax({ url: currentURL + "/api/tables", method: "GET" })
        .done(function(tableData) {

          // Here we are logging the URL so we have access to it for troubleshooting
          console.log("------------------------------------");
          console.log("URL: " + currentURL + "/api/tables");
          console.log("------------------------------------");

          // Here we then log the NYTData to console, where it will show up as an object.
          console.log(tableData);
          console.log("------------------------------------");

          // Loop through and display each of the customers
          for (var i = 0; i < tableData.length; i++) {

            // Create the HTML Well (Section) and Add the table content for each reserved table
            var tableSection = $("<div>");
            tableSection.addClass("well");
            tableSection.attr("id", "tableWell-" + i + 1);
            $("#tableSection").append(tableSection);

            var tableNumber = i + 1;


            // Then display the remaining fields in the HTML (Section Name, Date, URL)
            $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
          }
        });
      }
