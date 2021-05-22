const countDown= 5;

let timeLeft = countDown * 60;

let score = 0;

var startButtonEl = document.getElementById("start-btn");
var feedBackEl = document.getElementById("feedback-text");
var quizQuestionsEl = document.getElementById("question-text");
var quizAnswersEl = document.getElementById("quiz-answers");
var answerButtons = document.getElementsByClassName("btn");
var buttonAEl = document.getElementById("btn-a");
var buttonBEl = document.getElementById("btn-b");
var buttonCEl = document.getElementById("btn-c");
var buttonDEl = document.getElementById("btn-d");

var questions = [
                 "What does HTML stand for?",
                 "What is JavaScript used for?",
                 "Media Queries make a webpage...",
                 "CSS stands for ... and is used to ... a webpage",
                 "What is JavaScript based on?"
                ];

var answers = [
                "Hyper Text Markup Language",
                "Hipster Texting Marketing Lingo",
                "Hyper Threading Marking List",
                "Hyper Targeting Missile Lock",
                
                "Making a webpage interactive",
                "Taking coffee orders",
                "Creating computer games like Minecraft",
                "Telling HAL to open the pod bay doors",
                
                "Search for the latest Social Media trends",
                "Ask questions of online influencers",
                "Allow YouTube videos to be played",
                "Mobile responive",
                  
                "Click Search Save, publish",
                "Cascading Style Sheet, style",
                "Clap Slap Snap, print",
                "Cascading Style Sheet, sell",
                 
                "ExtremeScript",
                "Python",
                "CoffeeScript",
                "ECMAScript"
              ];

startButtonEl.addEventListener('click', startQuiz);

function startQuiz() {
startButtonEl.classList.add('clear')
quizQuestionsEl.classList.remove('clear')
quizAnswersEl.classList.remove('clear')
getQuestion();
quizTimer();
}

function getQuestion() {
    questionOne();
}

function questionOne() {
    quizQuestionsEl.innerText = questions[0];
    answerOne();
}
function questionTwo() {
    quizQuestionsEl.innerText = questions[1];
    answerTwo();
}

function questionThree() {
    quizQuestionsEl.innerText = questions[2];
    answerThree();
}

function questionFour() {
    quizQuestionsEl.innerText = questions[3];
    answerFour();
    
}

function questionFive() {
    quizQuestionsEl.innerText = questions[4];
    answerFive();
}
function answerOne() {
    buttonAEl.innerText = answers[0];
    buttonBEl.innerText = answers[1];
    buttonCEl.innerText = answers[2];
    buttonDEl.innerText = answers[3];
    
    buttonAEl.addEventListener('click', questionTwo);
    buttonBEl.addEventListener('click', questionTwo);
    buttonCEl.addEventListener('click', questionTwo);
    buttonDEl.addEventListener('click', questionTwo);

    buttonAEl.addEventListener('click', feedBackRight);
    buttonBEl.addEventListener('click', feedBackWrong);
    buttonCEl.addEventListener('click', feedBackWrong);
    buttonDEl.addEventListener('click', feedBackWrong);
}

function answerTwo(){
    buttonAEl.innerText = answers[4];
    buttonBEl.innerText = answers[5];
    buttonCEl.innerText = answers[6];
    buttonDEl.innerText = answers[7];

    buttonAEl.addEventListener('click', questionThree);
    buttonBEl.addEventListener('click', questionThree);
    buttonCEl.addEventListener('click', questionThree);
    buttonDEl.addEventListener('click', questionThree);

    buttonAEl.addEventListener('click', feedBackRight);
    buttonBEl.addEventListener('click', feedBackWrong);
    buttonCEl.addEventListener('click', feedBackWrong);
    buttonDEl.addEventListener('click', feedBackWrong);
}

function answerThree(){
    buttonAEl.innerText = answers[8];
    buttonBEl.innerText = answers[9];
    buttonCEl.innerText = answers[10];
    buttonDEl.innerText = answers[11];

    buttonAEl.addEventListener('click', questionFour);
    buttonBEl.addEventListener('click', questionFour);
    buttonCEl.addEventListener('click', questionFour);
    buttonDEl.addEventListener('click', questionFour);

    buttonAEl.addEventListener('click', feedBackWrong);
    buttonBEl.addEventListener('click', feedBackWrong);
    buttonCEl.addEventListener('click', feedBackWrong);
    buttonDEl.addEventListener('click', feedBackRight);
}

function answerFour(){
    buttonAEl.innerText = answers[12];
    buttonBEl.innerText = answers[13];
    buttonCEl.innerText = answers[14];
    buttonDEl.innerText = answers[15];

    buttonAEl.addEventListener('click', questionFive);
    buttonBEl.addEventListener('click', questionFive);
    buttonCEl.addEventListener('click', questionFive);
    buttonDEl.addEventListener('click', questionFive);

    buttonAEl.addEventListener('click', feedBackWrong);
    buttonBEl.addEventListener('click', feedBackRight);
    buttonCEl.addEventListener('click', feedBackWrong);
    buttonDEl.addEventListener('click', feedBackWrong);
}

function answerFive(){
    buttonAEl.innerText = answers[16];
    buttonBEl.innerText = answers[17];
    buttonCEl.innerText = answers[18];
    buttonDEl.innerText = answers[19];

    buttonAEl.addEventListener('click', quizOver);
    buttonBEl.addEventListener('click', quizOver);
    buttonCEl.addEventListener('click', quizOver);
    buttonDEl.addEventListener('click', quizOver);

    buttonAEl.addEventListener('click', feedBackWrong);
    buttonBEl.addEventListener('click', feedBackWrong);
    buttonCEl.addEventListener('click', feedBackWrong);
    buttonDEl.addEventListener('click', feedBackRight);
}
function feedBackRight(){
    feedBackEl.classList.remove('clear')
    feedBackEl.classList = ("correct");
    feedBackEl.innerText = ("Correct");
}

function feedBackWrong(){
    feedBackEl.classList.remove('clear')
    feedBackEl.classList.add("incorrect");
    feedBackEl.innerText = ("Incorrect");

}
function quizTimer() {

}

function quizOver() {
    alert("Thank You for Playing!");
    highScores();
}

function scoringAnswers(){

}

function highScores() {
var player = prompt("Please enter your initials: ");

}