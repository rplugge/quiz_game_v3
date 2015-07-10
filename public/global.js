var user_input = document.getElementById("input");
var submit = document.getElementById("submit_button");
var next = document.getElementById("next_button");

var question_correct = document.getElementById("correct");
var question_incorrect = document.getElementById("incorrect");

var score_screen = document.getElementById("score")

var current = 0;
var answers = ["d", "b", "c", "d"];
var player_score = 0

function change_question() {
  if (current == 0) {
    question1.style.display = "none";
    question2.style.display = "initial";
    current += 1;
  } else if (current == 1) {
    question2.style.display = "none";
    question3.style.display = "initial";
    current += 1
  } else if (current == 2) {
    question3.style.display = "none";
    question4.style.display = "initial";
    current += 1;
  } else if (current == 3) {
    question4.style.display = "none";
    user_input.style.display = "none";
    submit.style.display = "none";
    next.style.display = "none";
    
    score_screen.innerHTML = "You got " + player_score + " out of " + answers.length + " correct!"
  }

  question_correct.style.display = "none";
  question_incorrect.style.display = "none";
  user_input.value = ""
}

function check_answer() {
  var user_input = document.getElementById("input").value;
  var user_input = user_input.toLowerCase();
  
  if (user_input == answers[current]) {
    question_correct.style.display = "initial"
    player_score += 1
  } else {
    question_incorrect.style.display = "initial"
  }
}


next.addEventListener("click", change_question);

submit.addEventListener("click", check_answer);