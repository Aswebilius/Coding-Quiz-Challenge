const countDown= 5;

let timeLeft = countDown * 60;

var startButtonEl = document.querySelector("start-btn");
var quizQuestionsEl = document.querySelector("question-text");
var quizAnswersEl = document.querySelector("quiz-answers");
var answerButtons = Array.from(document.querySelector("btn"));


var questions = ["What does HTML stand for?"];
                ["What is JavaScript used for?"];
                ["Media Queries make a webpage..."];
                ["CSS stands for ... and is used to ... a webpage"];
                ["What is JavaScript based on?"];

var answerOne = ["Hipster Texting Marketing Lingo"];
                ["Hyper Text Markup Language"];
                ["Hyper Threading Marking List"];
                ["Hyper Targeting Missile Lock"];

var answerTwo = ["Making a webpage interactive"];
                ["Taking coffee orders"];
                ["Creating computer games such as Low Graphic Blockbuilder"];
                ["Telling HAL to open the pod bay doors"];

var answerThree = ["Search for the latest Social Media trends"];
                  ["Ask questions of online influencers"];
                  ["Allow YouTube videos to be played"];
                  ["Mobile responive"];

var answerFour = ["Click Search Save, publish"];
                 ["Cascading Style Sheet, style"];
                 ["Clap Slap Snap, print"];
                 ["Cascading Style Sheet, sell"];

var answerFive = ["ExtremeScript"]
                 ["Python"];
                 ["CoffeeScript"];
                 ["ECMAScript"];

startButtonEl.addEventListener('click', startQuiz)

function startQuiz() {
startButtonEl.classList.add('clear')
quizQuestionsEl.classList.remove('clear')
quizAnswersEl.classList.remove('clear')
getQuestion();
quizTimer();
}

function getQuestion(){
    question()
    answerOption()
}

function question() {
    quizQuestionsEl.innerText = questions;
}


function quizTimer() {

}

function quizOver() {

}

function highScores() {

}