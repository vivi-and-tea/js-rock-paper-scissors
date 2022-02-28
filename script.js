// Rock Paper Scissors!

const playerScore = 0;
const computerScore = 0;

// Randomizing computer's choice.
function computerPlay() {
  return Math.floor(Math.random() * 3 + 1);
}

// Getting values for player and pc choices.
const computerSelection = computerPlay();
const playerSelection = 3;

// Function to play a single round.
function playRound(pc, player) {
  if (pc === player) {
    console.log("It's a tie! " + pc + player);
  } else if (pc === 2 && player === 3) {
    console.log("Computer wins: " + pc + " " + player);
  } else if (pc === 3 && player === 1) {
    console.log("Computer wins: " + pc + " " + player);
  } else if (pc < player) {
    console.log("Computer wins: " + pc + " " + player);
  } else {
    console.log("Player wins: " + pc + " " + player);
  }
}

// Function to loop for 5 rounds, tracking points.
function game() {
  for (let i = 0; i < 5; i++) {}
}

console.log(playRound(computerSelection, playerSelection));
