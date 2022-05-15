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
// var time = questions.length * 10
// var currentQuestion = 0;
var secondsLeft = 5;
startBtn.addEventListener("click", gameStart)

function gameStart() {
    console.log("started")
    startBtn.classList.add('hidden')
    startScrEl.classList.add('hidden')
    questionEl.classList.remove('hidden')
    setInterval

}

// Function to start the quiz, timer, hide start screen, reveal question screen
var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);

        gameEnd()
    }
}, 1000);

function presentQuestion() {

}


// function to get question from the list, clear old question choices

// event listener for click choice



// function for question click

// if wrong, penalize time

// if right, reward somehow and move on to next queston




// function to end the quiz, stop timer, show end screen and final score
function gameEnd() {

    endingEl.classList.remove('hidden')
    
    clearInterval(timerInterval);
    return (document.getElementById('final-score').innerHTML = secondsLeft);

}





// timer function.  End quiz if ran out of time






// Save high score function


// quiz questions
var questions = [
    {
        title: "Which html tag contains javascript?",
        choices: ['<p>', '<link>', '<js>', '<script>'],
        answer: '<script>'
    },
    {
        title: "How do you declare a variable in CSS?",
        choices: ['-- (double hyphen)', '.var', '<variable>', ':: (double colon)'],
        answer: '-- (double hyphen)'
    },
    {
        title: "How do you return a reference from html in javascript?",
        choices: ['<get-element>', 'https://...', 'document.getElementById()', '<a href="...">'],
        answer: 'document.getElementById()'
    },
    {
        title: "Where should your javascript link be located on an html file?",
        choices: ['in the header', 'in the footer', 'at the end of the file', 'in an <aside>'],
        answer: 'at the end of the file'
    },
    {
        title: "console.log() will display data on a webpage.",
        choices: ['True', 'False'],
        answer: 'False'
    },
    {
        title: "How do you NOT decleare a variable in javascript?",
        choices: ['var', 'let', '.style', 'const'],
        answer: '.style'
    },
]



