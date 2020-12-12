// Global variables to hold computerSelection & playerSelection results for use throughout the game.
let playerSelection,
    computerSelection,
// Global variables for recording the game score.
    scorePlayer = 0,
    scoreComputer = 0,
    scoreDraw = 0;

// Function for accepting player choice.
function playerPlay() {
  // Boolean for controlling the while loop, waiting for proper player input.
  let waiting = true;
  while (waiting) {
    // Prompting the player for their choice.
    playerSelection = prompt("Enter your choice (rock, paper, scissors): ")
    // If cancelled, game ends.
    if (playerSelection === null) {
      alert("Game cancelled.")
      return playerSelection;
    } else {
      // Convert player input to lower case & trim white space for easier handling.
      playerSelection = playerSelection.toLowerCase()
      playerSelection = playerSelection.trim()
      // Verify the player input is valid, notify if not.
      if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
      } else {
        alert("Invalid choice, please choose \"rock\", \"paper\", or \"scissors\"");
      }
    }
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
    score()
    let result = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase() + ", round is a draw!"
    return result + "\n" + score("request")
  };
  let roundWin = () => {
    score(playerSelection)
    let result = roundWin = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase() +  ", you win!"
    return result + "\n" + score("request")
  };
  let roundLose = () => {
    score(computerSelection)
    let result = roundLose = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase() +  ", you lose!";
    return result + "\n" + score("request")
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

// Function for managing the score.
function score(result) {
  // Parameters for requesting score, and resetting the score.
  if (result == "request") {
    let request = "Wins: " + scorePlayer + "  Losses: " + scoreComputer + "  Draws: " + scoreDraw;
    return request;
  } else if (result == "reset") {
    scorePlayer = 0;
    scoreComputer = 0;
    scoreDraw = 0;
    return score("request");
    // Depending on the parameter input, the score increments.
  } else if (result == playerSelection) {
    scorePlayer++;
  } else if (result == computerSelection) {
    scoreComputer++;
  } else {
    scoreDraw++;
  }
}

// Function for calling the game to start.
function game() {
  // Prompt the player for the amount of rounds & call the gameStart function.
  let round = prompt("How many rounds would you like to play?  Enter a number. ");
  // If cancelled, game ends.
  if (round === null) {
    console.log("Game cancelled.");
    alert("Game cancelled.");
    return;
  }
  gameStart(round);
  // Starts the game with specified rounds.
  function gameStart(round) {
    // Calling for player input & computer input.
    let roundInput = () => {
      playerSelection = playerPlay()
      computerSelection = computerPlay()
    };
    // If there are rounds specified, loop until satisfied.
    if (round) {
      score("reset");
      while (round) {
        console.log(round);
        roundInput();
        // If cancelled, game ends.
        if (playerSelection === null) {
          console.log("Game cancelled.");
          break;
        }
        console.log(playRound(playerSelection, computerSelection));
        round--;
      }
    }
  }
}
