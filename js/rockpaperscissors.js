//This script is a simple rock, paper scizzor game (that you play in the console)

//create variable to store the computer's score and the players score as well as strings for rock, paper and scissors
let computerScore = 0;
let playerScore = 0;

//Create variables to store text output of respective scores
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computerScore");

//Create variable to store middle text
const middleText = document.getElementById("middle-text");

//Create variable to store round result p element
const roundResult = document.getElementById("round-result");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//Get the button elements from the page and store them in const variables
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

//Get the button element for "Play Again" and the image within the button
const playAgainButton = document.getElementById("play-again-button");
const playAgainButtonImg = document.getElementById("play-again-img");

//The following events call the playRound function and passes the relevant string based on the players button selection
rockButton.addEventListener("click", () => {

    playRound(ROCK, computerSelect());

});

paperButton.addEventListener("click", () => {

    playRound(PAPER, computerSelect());

});

scissorsButton.addEventListener("click", () => {

    playRound(SCISSORS, computerSelect());

});


//Restart the game and reset variables
playAgainButton.addEventListener("click", () =>{

    //Change the button image when clicked
    playAgainButtonImg.src = "images/PlayAgain2.png";

    setTimeout(function(){
        playAgainButtonImg.src = "images/PlayAgain1.png";
        resetGame();
    }, 200);

    
    
});


//Create a function called computerSelect that randomly selects rock, paper or scissors and returns the selection in a string
function computerSelect(){
    //Generate a number from 1 to 3 (1 = rock, 2 = paper and 3 = scissors and then based on the number, return the relevant string)
    let choice = Math.floor(Math.random() * 3 + 1);

    console.log(choice);

    if(choice === 1){
        return ROCK;
    }
    else if(choice === 2){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
}

//this function plays one round and compares the player input vs the computer input and determines the winner of the round
function playRound(playerSelection, computerSelection){

    

    //if the player and the computer have the same choice, its a tie, otherwise compare each choice, update the score and determine the winner
    if(playerSelection === computerSelection){
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - It's a tie!`;
    }
    else if(playerSelection === ROCK && computerSelection === PAPER){
        computerScore++;
        computerScoreText.innerText = computerScore;
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - Computer wins!`;
    }
    else if(playerSelection === ROCK && computerSelection === SCISSORS){
        playerScore++;
        playerScoreText.innerText = playerScore;
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - You win!`;
    }
    else if(playerSelection === PAPER && computerSelection === ROCK){
        playerScore++;
        playerScoreText.innerText = playerScore;
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - You win!`;
    }
    else if(playerSelection === PAPER && computerSelection === SCISSORS){
        computerScore++;
        computerScoreText.innerText = computerScore;
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - Computer wins!`;
    }
    else if(playerSelection === SCISSORS && computerSelection === ROCK){
        computerScore++;
        computerScoreText.innerText = computerScore;
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - Computer wins!`;
    }
    else if(playerSelection === SCISSORS && computerSelection === PAPER){
        playerScore++;
        playerScoreText.innerText = playerScore;
        roundResult.innerText = `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - You win!`;
    }

    if((playerScore == 5 || computerScore == 5)){
        roundResult.innerText = "";
        disableButtons();
        playAgainButton.style.visibility = "visible";
        if(computerScore > playerScore){
            middleText.innerText = "Computer Wins!";
        }
        else if(computerScore < playerScore){
            middleText.innerText = "You Win!";
        }
        else{
            middleText.innerText = "It's a Draw!";
        }
    }
}

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons(){
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function resetGame(){
    computerScore = 0;
    playerScore = 0;

    enableButtons();

    middleText.innerText = "VS";

    computerScoreText.innerText = "0";
    playerScoreText.innerText = "0";

    playAgainButton.style.visibility = "hidden";
}