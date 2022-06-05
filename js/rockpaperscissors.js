//This script is a simple rock, paper scizzor game (that you play in the console)

//create variable to store the computer's score and the players score as well as strings for rock, paper and scissors
let computerScore = 0;
let playerScore = 0;

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//Create a function called computerSelect that randomly selects rock, paper or scissors and returns the selection in a string
function computerSelect(){
    //Generate a number from 1 to 3 (1 = rock, 2 = paper and 3 = scissors and then based on the number, return the relevant string)
    let choice = (Math.random() * 3) + 1;

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
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - It's a tie!`;
    }
    else if(playerSelection === ROCK && computerSelection === PAPER){
        computerScore++;
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - Computer wins!`;
    }
    else if(playerSelection === ROCK && computerSelection === SCISSORS){
        playerScore++;
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - You win!`;
    }
    else if(playerSelection === PAPER && computerSelection === ROCK){
        playerScore++;
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - You win!`;
    }
    else if(playerSelection === PAPER && computerSelection === SCISSORS){
        computerScore++;
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - Computer wins!`;
    }
    else if(playerSelection === SCISSORS && computerSelection === ROCK){
        computerScore++;
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - Computer wins!`;
    }
    else if(playerSelection === SCISSORS && computerSelection === PAPER){
        playerScore++;
        return `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection} - You win!`;
    }
}

//This function checks the user input
function checkBadInput(input){
    if(input === ROCK){
        return false;
    }
    else if(input === SCISSORS){
        return false;
    }
    else if(input === PAPER){
        return false;
    }
    else{
        return true;
    }
}

//This funtion plays a total of 5 rounds and determines the winner at the end
function game(){
    let userChoice = "";
    let roundResult = "";
    console.log("Rock, Paper, Scissors! It's you vs the computer. Enter your choice (Rock, Paper or Scissors");

    //loop through 5 games
    for(let i = 0; i < 5; i++){
        userChoice = prompt("Enter your choice.");
        userChoice = userChoice.toLowerCase();

        //Check if the user's input is valid. If not, prompt the user until a valid input is given
        while(checkBadInput(userChoice)){
            alert("Please enter either rock, paper or scissors (check your spelling).");
            userChoice = prompt("Enter your choice.");
            userChoice = userChoice.toLowerCase();
        }
        
        //Play one round of the game
        roundResult = playRound(userChoice, computerSelect());
        console.log(roundResult);
    }

    //Determine the winner
    if(playerScore > computerScore){
        console.log("You win the game!");
    }
    else if(playerScore < computerScore){
        console.log("You lose :-(");
    }
    else{
        console.log("It's a tie game!")
    }

}