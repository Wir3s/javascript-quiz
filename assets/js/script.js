
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
var answerOne = document.createElement("li");
var answerTwo = document.createElement("li");
var answerThree = document.createElement("li");
var answerFour = document.createElement("li");

var chosenQuestion = "";
var isComplete = false;
var timer;
var timerCount;
var score = 0;
// Need array(s) of questions and answers, and correct answer noted
var questions = [1, 2, 3, 4, 5, 6, 7, 8];

questionTheFirst.textContent = "Is JavaScript a real thing?";
answerOne.textContent = "First Choice";
answerTwo.textContent = "Second Choice";
answerThree.textContent = "Third Choice";
answerFour.textContent = "Fourth Choice";


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

/* Create a question that appears when ‘start button’ is pressed
   Eventually, this will be an array of questions, chosen one at a time in a random order
*/
function displayQuestion() {
// Randomly select a question, for now just display a question
/*   chosenQuestion =
     var randomQuestion = Math.floor(Math.random() * questions.length) ;
     var choice1 = questions[randomQuestion];
    questions.splice(randomQuestion, 1);
*/    
// Create a question with list of answers
    questionField.appendChild(questionTheFirst);
    questionTheFirst.appendChild(answerList);
    answerList.appendChild(answerOne);
    answerList.appendChild(answerTwo);
    answerList.appendChild(answerThree);
    answerList.appendChild(answerFour);
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
