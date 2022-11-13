// Declare global variables

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var highScore = document.querySelector(".high-score");
var questionField = document.querySelector(".question-box");
var answerField = document.querySelector(".answer-box");

// Create question field
var questionTheFirst = document.createElement("p");
// Create list elements

var randomQuestion = "";
var isComplete = false;
var timer;
var timerCount;
var score = 0;

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
  getHighScores();
}

// The startQuiz function is called when the start button is clicked
function startQuiz() {
  timerCount = 90;
  // Hide start button when quiz begins
  startButton.style.display = "none";
  selectQuestion();
  startTimer();
}

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

    // Check if answer is correct, set value based on response
    if (correctAnswer === answerItem.name) {
      answerItem.setAttribute("value", true);
    } else {
      answerItem.setAttribute("value", false);
    }
    // Adds buttons to answer container
    answerField.appendChild(answerItem);
    // Add event listener to buttons
    answerItem.addEventListener("click", function () {
      // if button clicked has value of 'true'
      // if button clicked has value of 'false'
      console.log(answerItem);
    });
  }
}

// A listener needs to watch for answers to be clicked on

// Create a condition when the timer reaches zero or all questions have been answered: score is shown, initials can be entered

// When all questions have been answered, assign a score based on time left
// A point for each second, should work, timer will equal score

// Update score and set score to client storage

/* function setHighScore() {
    highScore.textCOntent = score;
    localStorage.setItem("highscore", score);
}

*/

// Attaches event listener to start button to call startQuiz function on click

startButton.addEventListener("click", startQuiz);
