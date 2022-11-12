/* Mini project is excellent template for flow of below content: 
	Global variables are declared, most initially set to zero, or false, or an empty string, or even just declared.  ***
*/

// Declare global variables

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionField = document.querySelector(".question-box");

var timer;
var timerCount;

// Create a score field

// Create an input for initials, linked to appropriate high scores

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    timerCount = 90;
    //Prevent start button from being clicked when quiz is in progress
    startButton.disabled = true;
    startTimer()
    }

console.log(timerElement);

// Create timer that begins counting down when a ‘start button’ is pressed
//   TImer will have to lose extra time when an incorrect answer is given
function startTimer() {
    // Set timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
      if (timerCount === 0) {
            
            clearInterval(timer);
            // Do something else, display score, prompt initials, etc
        }
    }, 1000);
}

// Create a question that appears when ‘start button’ is pressed
//    Eventually, this will be an array of questions, chosen one at a time in a random order

// Create a list of answers

// Create responses for correct and incorrect answers

// Attaches event listener to start button to call startQuiz function on click

startButton.addEventListener("click", startQuiz);
console.log(startButton);
console.log(startTimer);

// Create a condition when the timer reaches zero or all questions have been answered: score is shown, initials can be entered


// Style everything




