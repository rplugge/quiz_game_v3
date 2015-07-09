var next_buttonA = document.getElementById("next_button");

var question_correct = document.getElementById("correct");
var question_incorrect = document.getElementById("incorrect");


var submit_question1 = document.getElementById("question1_submit")
var submit_question2 = document.getElementById("question2_submit")
var submit_question3 = document.getElementById("question3_submit")
var submit_question4 = document.getElementById("question4_submit")

var current = 1;

function change_question() {
  if (current == 1) {
    question1.style.display = "none";
    question2.style.display = "initial";
    current += 1;
  } else if (current == 2) {
    question2.style.display = "none";
    question3.style.display = "initial";
    current += 1
  } else if (current == 3) {
    question3.style.display = "none";
    question4.style.display = "initial";
  }
  
  question_correct.style.display = "none";
  question_incorrect.style.display = "none";
}

function check_answer1() {
  var input_question1 = document.getElementById("question1_input").value;
  var input_question1 = input_question1.toLowerCase();
  
  if (input_question1 == "d") {
    question_correct.style.display = "initial"
  } else {
    question_incorrect.style.display = "initial"
  }
}

function check_answer2() {
  var input_question2 = document.getElementById("question2_input").value;
  var input_question2 = input_question2.toLowerCase();
  
  if (input_question2 == "c") {
    question_correct.style.display = "initial"
  } else {
    question_incorrect.style.display = "initial"
  }
}

function check_answer3() {
  var input_question3 = document.getElementById("question3_input").value;
  var input_question3 = input_question3.toLowerCase();
  
  if (input_question3 == "b") {
    question_correct.style.display = "initial"
  } else {
    question_incorrect.style.display = "initial"
  }
}

function check_answer4() {
  var input_question4 = document.getElementById("question4_input").value;
  var input_question4 = input_question4.toLowerCase();
  
  if (input_question4 == "d") {
    question_correct.style.display = "initial"
  } else {
    question_incorrect.style.display = "initial"
  }
}

next_buttonA.addEventListener("click", change_question);

submit_question1.addEventListener("click", check_answer1);
submit_question2.addEventListener("click", check_answer2);
submit_question3.addEventListener("click", check_answer3);
submit_question4.addEventListener("click", check_answer4);