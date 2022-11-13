
// Declare global variables

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var highScore = document.querySelector(".high-score");
var questionField = document.querySelector(".question-box");
var answerField = document.querySelector(".answer-box");
var choicesList = document.querySelector(".oL")
// Create question field or array or something!
var questionTheFirst = document.createElement("p");
// Create list elements 
var answerItem = document.createElement("li");


var randomQuestion = "";
var isComplete = false;
var timer;
var timerCount;
var score = 0;

// Array(s) of questions and answers, and correct answer noted
// Option 1
// var questionsAnswers = [["question1", ["answer1", "answer2", "answer3", "answer4"]], ["question2", ["answer1", "answer2", "answer3", "answer4"]], ["question3", ["answer1", "answer2", "answer3", "answer4"]], ["question4", ["answer1", "answer2", "answer3", "answer4"]] ];
// Option 2

var questionsAnswers = [
  {
    question: "question 1",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option3"
  },
 {
    question: "question 2",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option1"
  },
  {
    question: "question 3",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option1"
  },
  {
    question: "question 4",
    choices: ["option1", "option2", "option3", "option4"],
    answer: "option1"
}]

/*
And in your HTML you can have a div for questions and a div for the multiple choice answers.
you will place the questions.question into the textcontent of the div for questions and question[i].answers[k] goes into the textcontent of the div for multiple choice answers.
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
    selectQuestion()
    startTimer()
    }

console.log(timerElement);

//  Timer begins counting down when start button is pressed
//  TImer will need to lose extra time when an incorrect answer is given
function startTimer() {
    // Set timer
    timer = setInterval(function() {
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
    console.log(randomQuestion);
    questionTheFirst.textContent = randomQuestion.question;
    console.log(questionField);
    questionField.appendChild(questionTheFirst);

// Display Choices
    choicesLength = randomQuestion.choices.length;
            for (var i = 0; i < choicesLength; i++) {
                //var randomChoices = randomQuestion.choices[i];
                //answerItem.textContent = randomChoices;
                answerItem.textContent = randomQuestion.choices[i];
                choicesList.appendChild(answerItem);
                }
              
                console.log(answerItem);
                console.log(randomQuestion.choices.length);
    }
   
   
    
    

// A listener needs to watch for answers to be clicked on

// Create responses for correct and incorrect answers

// Attaches event listener to start button to call startQuiz function on click

startButton.addEventListener("click", startQuiz);
console.log(startButton);
console.log(startTimer);


// Create a condition when the timer reaches zero or all questions have been answered: score is shown, initials can be entered

// When all questions have been answered, assign a score based on time left
// A point for each second, should work, timer will equal score

// Update score and set score to client storage

/* function setHighScore() {
    highScore.textCOntent = score;
    localStorage.setItem("highscore", score);
}

*/
