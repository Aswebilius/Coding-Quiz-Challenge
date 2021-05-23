let timer;
var startButtonEl = document.querySelector('#start-btn');
var utilitiesEl = document.querySelector('#utilities');
var timerEl = document.querySelector('#timer');
var scoreEl = document.querySelector('#score');
var feedBackEl = document.querySelector('#feedback-text');
var quizQuestionsEl = document.querySelector('#question-text');
var quizAnswersEl = document.querySelector('#quiz-answers');
var answerButtons = document.querySelector('btn');
var buttonAEl = document.querySelector('#btn-a');
var buttonBEl = document.querySelector('#btn-b');
var buttonCEl = document.querySelector('#btn-c');
var buttonDEl = document.querySelector('#btn-d');

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

var score = [
            "100",
            "200",
            "300",
            "400",
            "500",
            ];

startButtonEl.addEventListener('click', startQuiz);

function startQuiz() {
startButtonEl.classList.add('clear')
utilitiesEl.classList.remove('clear')
quizQuestionsEl.classList.remove('clear')
quizAnswersEl.classList.remove('clear')
quizTimer(60);
getQuestion();
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
function quizTimer(time) {
timer = setInterval(timer, 1000);
function timer(){
    timerEl.textContent = time;
    time--;

    if (time == 29){
        timerEl.classList.add('alert');
    }
    if( time === -2){
        return quizOver();
    }
}
}
function penalty(){
    
}
function quizOver() {
    alert("Thank You for Playing!");
    highScores();
    timerEl.classList.add('clear');
}

function scoringAnswers(){
    scoreEl.textContent = score;
    score++;
}

function highScores() {
var playerIntitials = prompt("Please enter your initials: ");
localStorage.setItem(playerIntitials, "");
localStorage.getItem(score, "");

}