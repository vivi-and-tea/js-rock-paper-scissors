// Rock Paper Scissors! But this time I realize I'm supposed to use strings instead of integers.

let playerScore = 0;
let computerScore = 0;

// Randomizing computer's choice.
function computerPlay() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return possibleChoices[randomIndex];
}

// Get player input, check for validity, and convert to lowercase for comparison.
function playerInput() {
  // input = prompt("Please choose one: Rock, Paper, or Scissors.").toLowerCase();
  if (input === "rock" || input === "scissors" || input == "paper") {
    return input;
  } else {
    alert("Sorry, that's not a valid choice.");
    playerInput();
  }
}

// Function to play a single round
function playRound(pc, player) {
  if (pc == player) {
    console.log("You both chose " + pc + ". It's a tie!");
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else if (pc == "rock" && player == "scissors") {
    computerScore += 1;
    console.log(
      "You chose " + player + " and the computer chose " + pc + ". You lose!"
    );
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else if (pc == "scissors" && player == "paper") {
    computerScore += 1;
    console.log(
      "You chose " + player + " and the computer chose " + pc + ". You lose!"
    );
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else if (pc == "paper" && player == "rock") {
    computerScore += 1;
    console.log(
      "You chose " + player + " and the computer chose " + pc + ". You lose!"
    );
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else {
    playerScore += 1;
    console.log(
      "You chose " + player + " and the computer chose " + pc + ". You win!"
    );
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  }
}

// Function to loop for 5 rounds, tracking points.
function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    let computerSelection = computerPlay();
    let playerSelection = playerInput();
    console.log(playRound(computerSelection, playerSelection));
  }

  if (playerScore == computerScore) {
    console.log("The game is a tie! Wow...");
  } else if (playerScore > computerScore) {
    console.log("You win the game! Yay!");
  } else {
    console.log("You lose the game! Boo!");
  }
}

game();
