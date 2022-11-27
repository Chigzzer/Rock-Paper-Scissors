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
function game(){
    for (i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));  
    }
}

game();
