
//loop through questions and append them to the dom
var survey = document.getElementById('survey');
count = 1;
questions.forEach(function(question) {
  var questionText = question.question;
  var questionAnswers = question.answers;
  var fieldset = document.createElement('fieldset');
  question = document.createElement('p');
  question.innerHTML = questionText;
  fieldset.appendChild(question);
  questionAnswers.forEach(function(question) {
    var input = document.createElement('input');
    var label = document.createElement('label');
    var br = document.createElement('br')
    label.innerHTML = question.answer;
    input.setAttribute("type", 'radio');
    input.setAttribute("name", 'answer' + count);
    input.setAttribute("value", question.score);
    fieldset.appendChild(input);
    fieldset.appendChild(label);
    fieldset.appendChild(br)
  })
  survey.appendChild(fieldset);
  count++
});
