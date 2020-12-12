// Global scope variables to hold computerSelection & playerSelection results for use throughout the game.
let playerSelection,
    computerSelection;

// Function for accepting player choice.
function playerPlay() {
  // Prompting the player for their choice, converting to lower case and removing white space, no matter their input.
  playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.trim();
  // Verify the player input is valid, notify if not.
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    return playerSelection
  } else {
    playerSelection = "Invalid choice, please choose \"rock\", \"paper\", or \"scissors\"";
    return playerSelection
  }
}

// Function for computer choice.
function computerPlay() {
  // Expression for generating a random number.  Rock, paper, or scissors will be tied to said number.
  const randomSelection = () => Math.floor(Math.random()*3)
  computerSelection = randomSelection();
  // Depending on the return of randomSelection, the computer makes its selection.
  if (computerSelection == 0) {
    return computerSelection = "rock";
  } else if (computerSelection == 1) {
    return computerSelection = "paper";
  } else {
    return computerSelection = "scissors";
  }
}

// Function for playing one round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
  // Expressions for handling the end of round, depending on the outcome.
  let roundDraw = () => {
    let result = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase() + ", round is a draw!"
    return result
  };
  let roundWin = () => {
    let result = roundWin = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase() +  ", you win!"
    return result
  };
  let roundLose = () => {
    let result = roundLose = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase() +  ", you lose!";
    return result
  };
  // Round conditions dictating Win/Loss/Tie.
  if (playerSelection == computerSelection) {
    return roundDraw();
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return roundLose();
    } else {
      return roundWin();
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return roundLose();
    } else {
      return roundWin();
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return roundLose();
    } else {
      return roundWin();
    }
  }
}

// Function for calling the game to start.
function game() {
  // Calling the playerSelection & computerSelection functions for their input.
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  // Check for invalid player input.
  if (playerSelection.length > 8) {
    return playerSelection;
    // Else resume the game.
  } else {
    // Calling one round of play, inputing results of playerSelection & computerSelection.
    return playRound(playerSelection, computerSelection);
  }
}
