const playerOneScoreInputs = document.querySelectorAll('.playerOneTextBox');
const playerTwoScoreInputs = document.querySelectorAll('.playerTwoTextBox');
const playerThreeScoreInputs = document.querySelectorAll('.playerThreeTextBox');
const playerFourScoreInputs = document.querySelectorAll('.playerFourTextBox');
const playerOneResultDisplay = document.getElementById('playerOneResultDisplay');
const playerTwoResultDisplay = document.getElementById('playerTwoResultDisplay');
const playerThreeResultDisplay = document.getElementById('playerThreeResultDisplay');
const playerFourResultDisplay = document.getElementById('playerFourResultDisplay');

//event listeners for the score inputs
playerOneScoreInputs.forEach((input) => {
    input.addEventListener('input', calculateScores);
});

playerTwoScoreInputs.forEach((input) => {
    input.addEventListener('input', calculateScores);
});

playerThreeScoreInputs.forEach((input) => {
    input.addEventListener('input', calculateScores);
});

playerFourScoreInputs.forEach((input) => {
    input.addEventListener('input', calculateScores);
});


function calculateScores() {
    let playerOneTotal = 0;
    let playerTwoTotal = 0;
    let playerThreeTotal = 0;
    let playerFourTotal = 0;

    
    playerOneScoreInputs.forEach((input) => {
        const score = parseFloat(input.value);
        if (!isNaN(score)) {
            playerOneTotal += score;
        }
    });

    
    playerTwoScoreInputs.forEach((input) => {
        const score = parseFloat(input.value);
        if (!isNaN(score)) {
            playerTwoTotal += score;
        }
    });

    playerThreeScoreInputs.forEach((input) => {
        const score = parseFloat(input.value);
        if (!isNaN(score)) {
            playerThreeTotal += score;
        }
    });

    playerFourScoreInputs.forEach((input) => {
        const score = parseFloat(input.value);
        if (!isNaN(score)) {
            playerFourTotal += score;
        }
    });

    
    playerOneResultDisplay.value = playerOneTotal;
    playerTwoResultDisplay.value = playerTwoTotal;
    playerThreeResultDisplay.value = playerThreeTotal;
    playerFourResultDisplay.value = playerFourTotal;
}

//javascript for timer
var OneMinute = document.getElementsByClassName('OneMinute')[0];
var CoutdownDisplay = document.getElementsByClassName('CoutdownDisplay')[0];
var TwoMinutes = document.getElementsByClassName('TwoMinutes')[0];
var audio = new Audio("timeUpWhistle.mp3");


var totalSeconds = 60;
var totalTwoMinsSeconds = 120;
var secondsRemaining = totalSeconds;
var interval;

function updateCountdown() {
    var minutes = Math.floor(secondsRemaining / 60);
    var seconds = secondsRemaining % 60;
  
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
  
    CoutdownDisplay.textContent = minutes + ':' + seconds;
  
    if (secondsRemaining <= 0) {
      play();
      clearInterval(interval);
      CoutdownDisplay.textContent = '00:00';
    } else {
      secondsRemaining--;
    }
  }
  
  function play() {
    audio.play();
  }

OneMinute.addEventListener("click", () => {
clearInterval(interval); 
secondsRemaining = totalSeconds; 
interval = setInterval(updateCountdown, 1000); 
  });     

TwoMinutes.addEventListener("click", () => {
clearInterval(interval);
secondsRemaining = totalTwoMinsSeconds;
interval = setInterval(updateCountdown, 1000);
})


var startbutton = document.getElementsByClassName('startbutton')[0];
var stopbutton = document.getElementsByClassName('stopbutton')[0];
var resetbutton = document.getElementsByClassName('resetbutton')[0];

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let secs = 0;
let mins = 0;
let counterInterval; 

function Timerupdate(){
elapsedTime = Date.now() - startTime;

secs = Math.floor((elapsedTime / 1000) % 60);
mins = Math.floor((elapsedTime / (1000 * 60)) % 60);

if (secs < 10) {
    secs = '0' + secs;
  } 

if (mins < 10) {
    mins = '0' + mins;
  }

CoutdownDisplay.textContent = mins + ':' + secs;

}
startbutton.addEventListener("click", () => {
if(paused){
    clearInterval(interval)
    paused = false;
    startTime = Date.now() - elapsedTime;
    counterInterval = setInterval(Timerupdate, 75)
}
});
stopbutton.addEventListener("click", () => {
if(!paused){
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(counterInterval);
}
});
resetbutton.addEventListener("click", () => {
    paused = true;
    clearInterval(counterInterval)
    clearInterval(interval)
    CoutdownDisplay.textContent = "00:00"
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    mins = 0;
    secs = 0;

});


