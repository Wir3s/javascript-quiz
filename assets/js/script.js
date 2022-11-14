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
  {
    question: "question 2",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option1",
  },
  {
    question: "question 3",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option1",
  },
  {
    question: "question 4",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option1",
  },
];

/*
var currentQuestionIndex = 0
var currentQuestionObj = questionArrays[currentQuestionIndex]
and then when you click on a choice button you could curentQuestionIndex++
next time you call the function to get a new question the currentQuestionObj will be the next object in the array
*/

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

/* Condition when all questions are answered 
function quizCompleted() {
  initials = prompt("Enter your initials");
  startButton.disabled = false;
  setHighScore()
  }

function setHighScore() {
  highScore = timerCount;
  localStorage.setItem("highScore", highScore);
  localStorage.setItem("initials", initials);
}

function getHighScore() {
  // Get store high score from client storage, if one exists
  var storedScore = localStorage.getItem("highScore");
  // If a stored score doesn't exist, set counter to 0
  if (storedScore === null) {
    highScore = 0;
  } else {
  highScore = storedScore;
  }
  highScoreDisplay = highScore;
}
*/

//  Timer begins counting down when start button is pressed
//  TImer will need to lose extra time when an incorrect answer is given
function startTimer() {
  // Set timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    /* Set condition if all questions have been answered
         if (timerCount >=0) {
             if (isComplete && timerCount > 0) {
                clearInterval(timer);
                quizCompleted();
        }
            }

    */

    // Tests if time has run out
    if (timerCount === 0) {
      // Clear interval
      clearInterval(timer);
      // Do something else, display score, prompt initials, etc
    }
  }, 1000);
}

// Select a question that appears when ‘start button’ is pressed

function selectQuestion() {
  // Randomly select a question
  var choice1 = Math.floor(Math.random() * questionsAnswers.length);
  var randomQuestion = questionsAnswers[choice1];
  questionsAnswers.splice(randomQuestion, 1);
  questionTheFirst.textContent = randomQuestion.question;
  questionField.appendChild(questionTheFirst);

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
    } else {
      answerItem.setAttribute("value", false);
    }
    // Adds buttons to answer container
    answerField.appendChild(answerItem);

    console.log(answerItem);
    console.log(answerField);
    // Add event listener to buttons
    // answerField.addEventListener("click", function (event) {
    // if button clicked has value of 'true'

    // if button clicked has value of 'false'
    //   event.stopPropagation();

    // });
  }
}

// A listener needs to watch for answers to be clicked on
/*
answerFieldButtons.addEventListener("click", checkAnswer);

function checkAnswer() {
  if (answerItem.value === "false") {
    timerCount--;
  }
  selectQuestion();
}
*/

// Create a condition when the timer reaches zero or all questions have been answered: score is shown, initials can be entered

// Attaches event listener to start button to call startQuiz function on click

startButton.addEventListener("click", startQuiz);
