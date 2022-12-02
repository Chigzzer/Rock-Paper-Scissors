// Set initial values
const rps = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let roundPlay = true;

// Set query selectors

const button = document.querySelector('.nextPart');
const choices = document.querySelectorAll(".rpsSelection");
const msgText = document.querySelector("#msg");
const roundButton = document.querySelector('#roundButton');
const story = document.querySelector("#story");
const game = document.querySelector("#game");
const finish = document.querySelector("#finish");
const text = document.querySelector("#text");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");
const text5 = document.querySelector("#text5");

function start(){
    button.addEventListener('click', partTwo, {once: true});
}

function partTwo(){
    text.classList.add('hidden');
    text2.classList.remove('hidden');
    button.setAttribute('onclick', 'partThree()');
}

function partThree(){
    text2.classList.add('hidden');
    text3.classList.remove('hidden');
    button.setAttribute('onclick', 'partFour()');
}

function partFour(){
    text3.classList.add('hidden');
    text4.classList.remove('hidden');
    button.setAttribute('onclick', 'partFive()');
}

function partFive(){
    text4.classList.add('hidden');
    text5.classList.remove('hidden');
    button.setAttribute('onclick', 'gameRun()');
}

function gameRun(){

    playerScore = 0;
    computerScore = 0;
    roundPlay = true;

    story.classList.add('hidden');

    game.classList.remove('hidden');

    console.log("ROUND PLAY")
    console.log(roundPlay);
    gameRound(); 
    
}

function gameRound(){
    console.log("Does this run");
    msgText.classList.add('hidden');
    roundButton.classList.add('hidden');
    choices.forEach(element => element.addEventListener('click', play));
}

function play(){
    console.log(roundPlay);
    choices.forEach(element => element.removeEventListener('click', play));
    const playerSelection = this.getAttribute('data-value');
    const computerSelection = getComputerChoice();
    const roundPoints = playRound(playerSelection, computerSelection);
       
   points(roundPoints, playerSelection, computerSelection);
    
    if (playerScore == 5 || computerScore == 5){
        finishGame(playerScore, computerScore);
    }
    roundButton.classList.remove('hidden');
    roundButton.addEventListener('click', gameRound);
}


function points(points, playerSelection, computerSelection){
    const playerSelectionEdit = rps[playerSelection];
    const computerSelectionEdit = rps[computerSelection];
    if (points == 2) {
        playerScore += 1;
        document.querySelector("#playerScore").textContent = `${playerScore}`;
        msgText.textContent = `YES! ${playerSelectionEdit} beats ${computerSelectionEdit}`;
        msgText.classList.remove('hidden');
    }
    else if (points == 0){
        computerScore += 1;
        document.querySelector("#computerScore").textContent = `${computerScore}`;
        msgText.textContent = `NO! ${playerSelectionEdit} loses against ${computerSelectionEdit}`;
        msgText.classList.remove('hidden');
    }
    else{
        msgText.textContent = `Darn it! You both chose ${playerSelectionEdit}.`
        msgText.classList.remove('hidden');
    }
}

// Getting the computer's random selection
function getComputerChoice(){
    // 0 if rock, 1 if paper and 2 if scissors
    let cpuSelection = Math.floor((Math.random() * 3));
    return cpuSelection;
}


// Function for one round of the game
function playRound(playerSelection, computerSelection){
    // 0 if user lost, 1 if a draw and 2 if user won
    const array = [[1, 0, 2], [2, 1, 0], [0, 2, 1]]; 
    const roundPlayed = array[playerSelection][computerSelection];
    return roundPlayed;
}

// Function that plays the game







function reRun(){
    finish.classList.add('hidden');
    game.classList.remove('hidden');
    playerScore = 0;
    computerScore = 0;
    roundPlay = true;
    document.querySelector("#computerScore").textContent = `${computerScore}`;
    document.querySelector("#playerScore").textContent = `${playerScore}`;


    gameRound(); 
}





function finishGame(playerScore, computerScore){
    game.classList.add('hidden');

    if (playerScore == 5){
        finish.textContent = "Congratulations you won; let's celebrate";
    }
    else if (computerScore == 5){
        finish.textContent = "Unfortuntely you lost!";
    }
   
    const playAgainTag = document.createElement('p');
    const playAgainText = document.createTextNode("Click the button below to fight him again.");
    const playAgainButton = document.createElement('button');
    playAgainButton.innerText = "Play Again";
    playAgainButton.addEventListener('click', reRun);
    playAgainTag.appendChild(playAgainText);
    finish.appendChild(playAgainTag);
    finish.appendChild(playAgainButton);
    finish.classList.remove('hidden');
}

start();



