let playerSelection,
    computerSelection,
    scorePlayer = 0,
    scoreComputer = 0,
    scoreDraw = 0;

function playerPlay() {
  let waiting = true;
  while (waiting) {
    playerSelection = prompt("Enter your choice (rock, paper, scissors): ", "rock")

    if (playerSelection === null) {
      alert("Game cancelled.")
      return playerSelection;
    } else {
      playerSelection = playerSelection.toLowerCase();
      playerSelection = playerSelection.trim();
      // Verify the player input is valid, notify if not.
      if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
      } else {
        alert("Invalid choice, please choose \"rock\", \"paper\", or \"scissors\"");
      }
    }
  }
}

function computerPlay() {
  // Generate a random number.  Rock, paper, or scissors will be tied to said number.
  const randomSelection = () => Math.floor(Math.random()*3)
  computerSelection = randomSelection();
  if (computerSelection == 0) {
    return computerSelection = "rock";
  } else if (computerSelection == 1) {
    return computerSelection = "paper";
  } else {
    return computerSelection = "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // Handling the end of round, depending on the outcome.
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

function score(result) {
  if (result == "request") {
    let request = "Wins: " + scorePlayer + "  Losses: " + scoreComputer + "  Draws: " + scoreDraw;
    return request;
  } else if (result == "reset") {
    scorePlayer = 0;
    scoreComputer = 0;
    scoreDraw = 0;
    return score("request");
  } else if (result == playerSelection) {
    scorePlayer++;
  } else if (result == computerSelection) {
    scoreComputer++;
  } else {
    scoreDraw++;
  }
}

function game() {
  let round = prompt("How many rounds would you like to play?  Enter a number. ", 1);

  let roundCount = (round) => {
    for (let i = 0; i < round; i++) {
      console.log("Round: " + round);
    }
  }

  if (round === null) {
    console.log("Game cancelled.");
    alert("Game cancelled.");
    return;
  } else if (round == 0) {
    return alert("Please enter a valid number of rounds.");
  }

  gameStart(round);

  function gameStart(round) {
    let roundInput = () => {
      playerSelection = playerPlay()
      computerSelection = computerPlay()
    };
    
    // Loop until satisfied the number of rounds.
    if (round) {
      score("reset");
      while (round) {
        roundCount(round);
        roundInput();
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
