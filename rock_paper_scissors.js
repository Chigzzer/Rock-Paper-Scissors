
let playerScore = 0;
let computerScore = 0;
let draw = false;
let roundPlay = true;

const choices = document.querySelectorAll(".rpsSelection");

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
    roundPlay = false;
    console.log(roundPlay);

    const drawText = document.querySelector("#draw");

    if (draw == true){
        drawText.classList.remove('show');
        drawText.classList.add('hidden');
        draw = false;
    }

    choices.forEach(element => element.removeEventListener('click', play));
       
    const playerSelection = this.getAttribute('data-value');
    const computerSelection = getComputerChoice();
    const roundPlayed = playRound(playerSelection, computerSelection);

    const roundButton = document.querySelector('#roundButton');
    roundButton.classList.add('show');

    roundButton.addEventListener('click', gameRound);


    console.log(roundPlay);

    if (roundPlayed == 2) {
        playerScore += 1;
        document.querySelector("#playerScore").textContent = `${playerScore}`;
    }
    else if (roundPlayed == 0){
        computerScore += 1;
        document.querySelector("#computerScore").textContent = `${computerScore}`;
    }
    else{
        draw = true;
        console.log(drawText.classList.add("show"));
    }


}

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

function gameRound(){
    console.log("Does this run");
    const roundButton = document.querySelector('#roundButton');
    roundButton.classList.remove('show');
    roundButton.classList.add('hidden');
    choices.forEach(element => element.addEventListener('click', play));
}

function game(){
    const story = document.querySelector("#story");
    story.classList.add('hidden');

    const game = document.querySelector("#game");
    game.classList.add('show');

    console.log("ROUND PLAY")
    console.log(roundPlay);
    gameRound(); 
    
}

function start(){
    
    button.addEventListener('click', partTwo, {once: true});
}

const button = document.querySelector('.nextPart');
start();



