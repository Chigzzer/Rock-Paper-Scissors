
let playerScore = 0;
let computerScore = 0;
let roundPlay = true;
const rps = ['Rock', 'Paper', 'Scissors'];

const choices = document.querySelectorAll(".rpsSelection");
const msgText = document.querySelector("#msg");
const roundButton = document.querySelector('#roundButton');
const story = document.querySelector("#story");
const game = document.querySelector("#game");
const finish = document.querySelector("#finish");



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
function play(){
    // roundPlay = false;
    console.log(roundPlay);
    choices.forEach(element => element.removeEventListener('click', play));
       
    const playerSelection = this.getAttribute('data-value');
    const computerSelection = getComputerChoice();
    const roundPlayed = playRound(playerSelection, computerSelection);
    const playerSelectionEdit = rps[playerSelection];
    const computerSelectionEdit = rps[computerSelection];
       
    if (roundPlayed == 2) {
        playerScore += 1;
        document.querySelector("#playerScore").textContent = `${playerScore}`;
        msgText.textContent = `YES! ${playerSelectionEdit} beats ${computerSelectionEdit}`;
        msgText.classList.remove('hidden');
    }
    else if (roundPlayed == 0){
        computerScore += 1;
        document.querySelector("#computerScore").textContent = `${computerScore}`;
        msgText.textContent = `NO! ${playerSelectionEdit} loses against ${computerSelectionEdit}`;
        msgText.classList.remove('hidden');
    }
    else{
        msgText.textContent = `Darn it! You both chose ${playerSelectionEdit}.`
        msgText.classList.remove('hidden');
    }
    
    if (playerScore == 5 || computerScore == 5){
        finishGame();
    }
    roundButton.classList.remove('hidden');
    roundButton.addEventListener('click', gameRound);
    
}

function partTwo(){
    const textOld = document.querySelector("#text");
    const textNew = document.querySelector("#text2");
    textOld.classList.add('hidden');
    textNew.classList.remove('hidden');
    button.setAttribute('onclick', 'partThree()');
}

function partThree(){
    const textOld = document.querySelector("#text2");
    const textNew = document.querySelector("#text3");
    textOld.classList.add('hidden');
    textNew.classList.remove('hidden');;
    button.setAttribute('onclick', 'partFour()');
}

function partFour(){
    const textOld = document.querySelector("#text3");
    const textNew = document.querySelector("#text4");
    textOld.classList.add('hidden');
    textNew.classList.remove('hidden');
    button.setAttribute('onclick', 'partFive()');
}

function partFive(){
    const textOld = document.querySelector("#text4");
    const textNew = document.querySelector("#text5");
    textOld.classList.add('hidden');
    textNew.classList.remove('hidden');
    button.setAttribute('onclick', 'gameRun()');
}

function gameRound(){
    console.log("Does this run");
    msgText.classList.add('hidden');
    const roundButton = document.querySelector('#roundButton');
    roundButton.classList.add('hidden');
    choices.forEach(element => element.addEventListener('click', play));
}

function gameRun(){

    story.classList.add('hidden');

    game.classList.remove('hidden');

    console.log("ROUND PLAY")
    console.log(roundPlay);
    gameRound(); 
    
}

function start(){
    
    button.addEventListener('click', partTwo, {once: true});
}

const button = document.querySelector('.nextPart');

function finishGame(){
    game.classList.add('hidden');
    finish.classList.remove('hidden');
}

start();



