// Getting the computer's random selection
function getComputerChoice(){
    const selections = ['Rock', 'Paper', 'Scissors'];
    let cpuSelection = selections[Math.floor(Math.random() * 3)];
    return cpuSelection;
}

// Function to get the player's election
function getPlayerChoice(){
    let playerSelection = prompt("Rock Paper or Scissors");
    return playerSelection.toUpperCase()    ;
}

// FUnction for one round of the game
function playRound(playerSelection, computerSelection){
    let message;
    console.log(playerSelection);
    if (computerSelection == "Rock"){
        if (playerSelection == "ROCK"){
            message = "Draw! You both chose Rock";
        }
        else if (playerSelection == "PAPER"){
            message = "You Win! Paper beats Rock";
        }
        else if (playerSelection == "SCISSORS"){
            message = "You Lose! Rock beats Scissors";
        }
        else {
            message = "Your user selection was wrong, please select a correct choice";
        }
    }
    else if (computerSelection == "Paper"){
        if (playerSelection == "ROCK"){
            message = "You Lose! Paper beats Rock";
        }
        else if (playerSelection == "PAPER"){
            message = "Draw! You both chose Paper";
        }
        else if (playerSelection == "SCISSORS"){
            message = "You Win! Scissors beats Paper";
        }
        else {
            message = "Your user selection was wrong, please select a correct choice";
        }
    }
    else{
        if (playerSelection == "ROCK"){
            message = "You Win! Rock beats Scissors.";
        }
        else if (playerSelection == "PAPER"){
            message = "You Lose! Scissors beats Paper";
        }
        else if (playerSelection == "SCISSORS"){
            message = "Draw! You both chose Scissors";
        }
        else {
            message = "Your user selection was wrong, please select a correct choice";
        }
    }
    return message;
}

// Function that plays the game

function partTwo(){
    const textOld = document.querySelector("#text");
    const textNew = document.querySelector("#text2");
    textOld.classList.remove('show');
    textOld.classList.add('hidden');
    textNew.classList.add('show');
    button.setAttribute('onclick', 'partThree()');
}

function partThree(){
    const textOld = document.querySelector("#text2");
    const textNew = document.querySelector("#text3");
    textOld.classList.remove('show');
    textOld.classList.add('hidden');
    textNew.classList.add('show');
    button.setAttribute('onclick', 'partFour()');
}

function partFour(){
    const textOld = document.querySelector("#text3");
    const textNew = document.querySelector("#text4");
    textOld.classList.remove('show');
    textOld.classList.add('hidden');
    textNew.classList.add('show');
    button.setAttribute('onclick', 'partFive()');
}

function partFive(){
    const textOld = document.querySelector("#text4");
    const textNew = document.querySelector("#text5");
    textOld.classList.remove('show');
    textOld.classList.add('hidden');
    textNew.classList.add('show');
    button.setAttribute('onclick', 'game()');
}

function game(){
    const story = document.querySelector("#story");
    story.classList.add('hidden');

    const game = document.querySelector("#game");
    story.classList.add('show');
}

const button = document.querySelector('.nextPart');
button.addEventListener('click', partTwo, {once: true});


