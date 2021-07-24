//This script is a simple rock, paper scizzor game (that you play in the console)

//create variable to store the computer's selection and the players selection
let computerSelection;
let playerSelection;

//Create a function called computerSelect that randomly selects rock, paper or scissors and returns the selection in a string
function computerSelect(){
    //Generate a number from 1 to 3 (1 = rock, 2 = paper and 3 = scissors and then based on the number, return the relevant string)
    let choice = (Math.random() * 3) + 1;

    if(choice === 1){
        return "Rock";
    }
    else if(choice === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}