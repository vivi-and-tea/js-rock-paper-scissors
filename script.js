let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.getElementById("player");
const computerScoreText = document.getElementById("computer");
const roundInfo = document.getElementById("roundInfo");
const winnerText = document.getElementById("winnerText");

// Allow buttons to be disabled after game is finished.
function disableButtons() {
  allButtons = document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

// Randomizing computer's choice.
function computerPlay() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return possibleChoices[randomIndex];
}

const rockButton = document.getElementById("rockBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const paperButton = document.getElementById("paperBtn");

rockButton.addEventListener("click", () => {
  playRound(computerPlay(), "rock");
});
scissorsButton.addEventListener("click", () => {
  playRound(computerPlay(), "scissors");
});
paperButton.addEventListener("click", () => {
  playRound(computerPlay(), "paper");
});

// Function to play a single round
function playRound(pc, player) {
  if (pc == player) {
    roundInfo.textContent = "You both chose " + pc + ". It's a tie!";
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else if (pc == "rock" && player == "scissors") {
    computerScore += 1;
    roundInfo.textContent =
      "You chose " + player + " and the computer chose " + pc + ". You lose!";
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else if (pc == "scissors" && player == "paper") {
    computerScore += 1;
    roundInfo.textContent =
      "You chose " + player + " and the computer chose " + pc + ". You lose!";
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else if (pc == "paper" && player == "rock") {
    computerScore += 1;
    roundInfo.textContent =
      "You chose " + player + " and the computer chose " + pc + ". You lose!";
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  } else {
    playerScore += 1;
    roundInfo.textContent =
      "You chose " + player + " and the computer chose " + pc + ". You win!";
    console.log(
      "Player Score: " +
        playerScore +
        ". Computer Score: " +
        computerScore +
        "."
    );
  }
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      winnerText.style.fontSize = "4em";
      winnerText.textContent = "You win the game! Yay!";
      disableButtons();
    } else if (computerScore > playerScore) {
      winnerText.style.fontSize = "4em";
      winnerText.textContent = "You lose the game! Boo!";
      disableButtons();
    }
  }
}
