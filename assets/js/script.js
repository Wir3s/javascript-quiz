
// Declare global variables

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var highScore = document.querySelector(".high-score");
var questionField = document.querySelector(".question-box");
// Create question field or array or something!
var questionTheFirst = document.createElement("p");
// Create ordered list element
var answerList = document.createElement("ol");
// Create list elements 
var answerItem = document.createElement("li");

var randomQuestion = "";
var isComplete = false;
var timer;
var timerCount;
var score = 0;

// Need array(s) of questions and answers, and correct answer noted
// Option 1
var questionsAnswers = [["question1", ["answer1", "answer2", "answer3", "answer4"]], ["question2", ["answer1", "answer2", "answer3", "answer4"]], ["question3", ["answer1", "answer2", "answer3", "answer4"]], ["question4", ["answer1", "answer2", "answer3", "answer4"]] ];
// Option 2
/*
var questionAnswers2 = [{

    question: 1,
    answer: 1, 2, 3, 4
}   {
    question: 2,
    answer: 1, 2, 3, 4
}   {
    question: 3,
    answer: 1, 2, 3, 4
}   {
    question: 4,
    answer: 1, 2, 3, 4
}]
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
    displayQuestion()
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
   
function displayQuestion() {
// Randomly select a question
 
    var choice1 = Math.floor(Math.random() * questionsAnswers.length) ;
    var randomQuestion = questionsAnswers[choice1];
    questionsAnswers.splice(randomQuestion, 1);
   // var questionTheFirst = [];
    questionTheFirst.textContent = randomQuestion;
  
// Create a question with list of answers
    questionField.appendChild(questionTheFirst);
    questionTheFirst.appendChild(answerList);
   
   /*
   for (var i = 0; i < questionTheFirst[i].length; i++) {
        var chosenQuestion = questionTheFirst[i].questionTheFirst;
        answerItem.textContent = chosenQuestion;
        answerList.appendChild(answerItem);
        console.log(questionsAnswers.length);
        console.log(i);
    }
    */
 
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
