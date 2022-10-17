// getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function getComputerChoice() {
    const arr = ['ROCK','PAPER','SCISSORS'];
    return arr[Math.floor(Math.random()*arr.length)];
    
}
//const computerSelection = getComputerChoice();
//console.log(computerSelection)

/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie You both picked ${playerSelection}`;
    } else if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')
    ) {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')
    ) {vv
        computerScore++;
        return `Oh no...You lose! ${computerSelection} beats ${playerSelection}`;
    } 

}

let userScore = parseInt (0);
let computerScore = parseInt (0);


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors").toUpperCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score = " + userScore);
        console.log("Computer's score = " + computerScore);
    }

    if (userScore > computerScore) {
        return `Congratulations, You WIN ${userScore} points against computer ${computerScore}`;
    } else if (userScore < computerScore) {
        return `Too bad, You LOST ${userScore} points against computer ${computerScore} `;
    } else {
        return `It's a tie. Try again`;
    }
}

console.log(game())
