// Declare global variables

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var highScoreDisplay = document.querySelector(".high-score");
var wrapperBox = document.querySelector("#wrapper");
var questionField = document.querySelector(".question-box");
var answerField = document.querySelector(".answer-box");
var answerFieldButtons = document.querySelectorAll(".answer-box button");

// Create question field
var questionTheFirst = document.createElement("p");
// Create list elements

var randomQuestion = "";
var isComplete = false;
var timer;
var timerCount;
var highScore = 0;
var initials = "";

// Array(s) of questions and answers, and correct answer noted

var questionsAnswers = [
  {
    question: "question 1",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option3",
  },
  // {
  //   question: "question 2",
  //   choices: ["option1", "option2", "option3", "option4"],
  //   answer: "option1",
  // },
  // {
  //   question: "question 3",
  //   choices: ["option1", "option2", "option3", "option4"],
  //   answer: "option1",
  // },
  // {
  //   question: "question 4",
  //   choices: ["option1", "option2", "option3", "option4"],
  //   answer: "option1",
  // },
];

// Called when page loads, looks for any existing high scores
function init() {
  getHighScore();
}

// The startQuiz function is called when the start button is clicked
function startQuiz() {
  timerCount = 90;
  // Hide start button when quiz begins
  startButton.style.display = "none";
  wrapperBox.style.display = "block";
  selectQuestion();
  startTimer();
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  var person = document.getElementById("initials").value;
  if (!person) {
    alert("You must enter your initials");
    return;
  }
  let object = {
    name: person,
    score: timerCount,
  };
  addToStorage(object);
}

// Condition when all questions are answered
function quizCompleted() {
  alert("Quiz Over");
  var quizOverTemplate = document.getElementById("quiz-over");
  quizOverTemplate.classList.remove("hide");
  wrapperBox.style.display = "none";
  clearInterval(timer);
  getHighScore();
  document.getElementById("form").addEventListener("submit", handleFormSubmit);
}

function addToStorage(newScore) {
  console.log("adding to storage");
  var history = JSON.parse(localStorage.getItem("highscores")) || [];
  console.log(history);
  history.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(history));
  getHighScore();
}
function logButton(event) {
  event.preventDefault();
  console.log("BUTTON PRESSED");
  console.log(event.target);
}

function getHighScore() {
  // Get store high score from client storage, if one exists
  var history = JSON.parse(localStorage.getItem("highscores")) || [];
  // If a stored score doesn't exist, set counter to 0
  var pastScoresEl = document.getElementById("past-scores");
  pastScoresEl.innerHTML = "";
  for (const log of history) {
    pastScoresEl.innerHTML += `<li> ${log.name} : ${log.score}`;
  }
  /*  var allButtons = document.getElementsByTagName('button')
  console.log(allButtons)
  for(const button of allButtons){
    if(button.hasAttribute("historic")){
      console.log(button)
      button.addEventListener('click', logButton)
    }
  }
*/
}

//  Timer begins counting down when start button is pressed
//  TImer will need to lose extra time when an incorrect answer is given
function startTimer() {
  // Set timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    // Tests if time has run out
    if (timerCount === 0) {
      // Clear interval
      clearInterval(timer);
      // End quiz
      quizCompleted();
    }
  }, 1000);
}
// Select a question that appears when ‘start button’ is pressed
function selectQuestion() {
  // Randomly select a question
  var choice1 = Math.floor(Math.random() * questionsAnswers.length);
  var randomQuestion = questionsAnswers[choice1];
  questionsAnswers.splice(questionsAnswers.indexOf(randomQuestion), 1);
  questionTheFirst.textContent = randomQuestion.question;
  questionField.appendChild(questionTheFirst);
  answerField.innerHTML = "";
  // Display Choices
  choicesLength = randomQuestion.choices.length;
  for (var i = 0; i < choicesLength; i++) {
    var listGen = randomQuestion.choices[i];
    var correctAnswer = randomQuestion.answer;
    // Creates buttons from answer choices
    var answerItem = document.createElement("button");
    answerItem.textContent = listGen;
    // set attributes on buttons
    answerItem.setAttribute("name", listGen);
    answerItem.setAttribute("class", "answerButtons");

    // Check if answer is correct, set value based on response
    if (correctAnswer === answerItem.name) {
      answerItem.setAttribute("value", true);
    }
    //else {
    //  answerItem.setAttribute("value", false);
    //}
    // Adds buttons to answer container
    answerField.appendChild(answerItem);

    // Add event listener to buttons
    answerItem.addEventListener("click", function (event) {
      //event.stopPropagation();
      // document.getElementsByClassName("answerButtons").onclick = function () {
      console.log(event.target);

      console.log(event.target);

      // if button clicked has value of 'true'
      /*
      if (answerItem.hasAttribute("value")) {
        window.alert("Correct!");
      } else {
        // if button clicked has value of 'false'
        timerCount -= 5;
        window.alert("That is NOT correct!");
      }

      if (questionsAnswers.length === 0) {
        quizCompleted();
      } else {
        selectQuestion();
      }
      */
    });
  }
}

// Attaches event listener to start button to call startQuiz function on click

startButton.addEventListener("click", startQuiz);
