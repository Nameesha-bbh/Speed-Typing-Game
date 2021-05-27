window.addEventListener('load',(e) => {
    wordInput.disabled = 'true';
    wordInput.placeholder = 'Select difficulty level';
    alert('Please select the diffculty level');
}); //When website loads

var difficulty = 0;
const diff = [7,5,3];
let isPlaying;
let time = diff[difficulty];
let score = 0;

document.getElementById('start').addEventListener('click',(e)=>{
    difficulty = document.getElementById('txt').value;
    time = diff[difficulty];
    init();
    document.getElementById('r1').style.display = "none";
    document.getElementById('txt').style.display = "none";
    document.getElementById('start').style.display = "none";
    document.getElementById('seconds').innerHTML = diff[difficulty];
    wordInput.placeholder = 'Start Typing...';
    wordInput.disabled = false;
    wordInput.focus();
    
    
});



const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');




const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'bye',
  'today',
  'tomorrow',
  'again',
  'development',
  'java',
  'module',
  'aeroplane'
];

function init(){
    showWord(words); //Show random word on load
    wordInput.addEventListener('input',startMatch);
    setInterval(countdown, 1000);//Countdown
    setInterval(checkStat,50);
}

document.getElementById('resetGame').addEventListener('click',resetGameInit);

function resetGameInit(){
    location.reload()
}

function startMatch(){
    if(wordMatches())
    {
        isPlaying = true;
        time = diff[difficulty];
        showWord(words);
        wordInput.value = '';
        score++;
    }
    scoreDisplay.innerHTML = score;

    
}

function wordMatches(){
    if (wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}
function showWord(words)
{
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}


// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
      // Decrement
      time--;
    } else if (time === 0) {
      // Game is over
      isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

function checkStat()
{
    if (!isPlaying && time === 0){
        wordInput.value = '';
        message.innerHTML = 'Game Over!!';
        wordInput.disabled = 'true';
        wordInput.placeholder = 'Press the "Restart Game" button to play again';
        document.getElementById('resetGame').focus();
    }
}
