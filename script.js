// Global scope result variables for computerSelection & playerSelection.
let playerResult,
    computerResult;

// Function for accepting player input.
function playerSelection() {

  // Prompting the player for their choice, converting to lower case, no matter their input.
  playerResult = prompt("Enter your choice (rock, paper, scissors): ");
  playerResult = playerResult.toLowerCase();

  // Verify the player input is valid, notify if not.
  if (playerResult == "rock" || playerResult == "paper" || playerResult == "scissors") {
    return playerResult
  } else {
    playerResult = invalid;
    return "Invalid choice, please choose \"rock\", \"paper\", or \"scissors\""
  }
}

// Function for computer input.
function computerSelection() {
  // Expression for generating a random number.  Rock, paper, or scissors will be tied to said number.
  const randomSelection = () => Math.floor(Math.random()*3)
  computerResult = randomSelection();

  // Depending on the return of randomSelection, the computer makes its selection.
  if (computerResult == 0) {
    return computerResult = "rock";
  } else if (computerResult == 1) {
    return computerResult = "paper";
  } else {
    return computerResult = "scissors";
  }
}

// Function for playing a round of Rock, Paper, Scissors.
function playRound() {
  // Calling the playerSelection & computerSelection functions for their input.
  playerSelection();
  computerSelection();
  // Expressions for handling the end of round, depending on the outcome.
  let roundDraw = () => {
    let result = playerResult + " vs " + computerResult + ", is a draw!"
    return result
  };
  let roundWin = () => {
    let result = roundWin = playerResult + " vs " + computerResult +  ", you win!"
    return result
  };
  let roundLose = () => {
    let result = roundLose = playerResult + " vs " + computerResult +  ", you lose!";
    return result
  };
  // Round conditions dictating Win/Loss/Tie.
  if (playerResult == computerResult) {
    return roundDraw();
  } else if (playerResult == "rock") {
    if (computerResult == "paper") {
      return roundLose();
    } else {
      return roundWin();
    }
  } else if (playerResult == "paper") {
    if (computerResult == "scissors") {
      return roundLose();
    } else {
      return roundWin();
    }
  } else if (playerResult == "scissors") {
    if (computerResult == "rock") {
      return roundLose();
    } else {
      return roundWin();
    }
  }
}
