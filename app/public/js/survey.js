
//loop through questions and append them to the dom
var survey = document.getElementById('survey');
var count = 1;
var labelCount = 1;
questions.forEach(function(question) {
  var questionText = question.question;
  var questionAnswers = question.answers;
  var fieldset = document.createElement('fieldset');
  fieldset.setAttribute('class', 'input-field');
  var question = document.createElement('p');
  question.innerHTML = questionText;
  fieldset.appendChild(question);
  questionAnswers.forEach(function(question) {
    var input = document.createElement('input');
    var label = document.createElement('label');
    var br = document.createElement('br')
    label.innerHTML = question.answer;
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'answer' + count);
    input.setAttribute('value', question.score);
    input.setAttribute('id','answer'+labelCount);
    input.setAttribute('class','validate');
    label.setAttribute('for','answer'+labelCount);
    fieldset.appendChild(input);
    fieldset.appendChild(label);
    fieldset.appendChild(br)
    labelCount++
  })
  survey.appendChild(fieldset);
  count++
});
