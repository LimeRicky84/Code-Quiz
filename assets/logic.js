// List variables and constants

var timerEl = document.getElementById("time")
var startBtn = document.getElementById("start")
var questionEl = document.getElementById("questions")
var startScrEl = document.getElementById("start-screen")
// var choicesEl = document.getElementById("choices")
// var nameEl = document.getElementById("name")
// var acceptEl = document.getElementById("accept")
// var feedbackEl = document.getElementById("feedback")
var endingEl = document.getElementById('ending')
// var time = questions.length * 15
// var currentQuestion = 0;

endingEl.classList.add('hidden')

startBtn.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startBtn.classList.add('hidden')
    startScrEl.classList.add('hidden')
    questionEl.classList.remove('hidden')
}

// Function to start the quiz, timer, hide start screen, reveal question screen





// function to get question from the list, clear old question choices

// event listener for click choice



// function for question click

// if wrong, penalize time

// if right, reward somehow and move on to next queston




// function to end the quiz, stop timer, show end screen and final score






// timer function.  End quiz if ran out of time






// Save high score function





