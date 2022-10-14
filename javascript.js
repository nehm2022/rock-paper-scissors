// getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function getComputerChoice() {
    const arr = ['Rock','Paper','Scissors'];
    return arr[Math.floor(Math.random()*arr.length)];
    
}
const computerSelection = getComputerChoice();
console.log(computerSelection)

/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)
*/
