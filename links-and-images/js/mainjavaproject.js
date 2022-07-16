var win = 0;
var lose = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelectione = playerSelection();
    let computerSelection = computerPlay();
    playRound(playerSelectione, computerSelection);
  }

  console.log("Has won " + win + " rounds of 5");
  console.log("You lose " + lose + " rounds of 5");

  if (win > lose) {
    console.log("You have won the Game");
  } else if (lose > win) {
    console.log("You have lost the Game");
  } else if (lose === win) {
    console.log("No winners");
  }
  win = 0;
  lose = 0;
}

function playerSelection() {
  var userPlay = "";
  do {
    userPlay = prompt("Choose your option (rock, paper, or scissors)").toLowerCase();
  } while (
    userPlay !== "rock" &&
    userPlay !== "paper" &&
    userPlay !== "scissors"
  );
  return userPlay;
}

function computerPlay() {
  let randomize = ["rock", "paper", "scissors"]; 
  return randomize [Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("Tie!!!");
    } else if (computerSelection === "paper") {
      lose = lose + 1;
      console.log("You lose! Paper beats rock.");
    } else {
      win = win + 1;
      console.log("You win! Rock beats scissors.");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      win = win + 1;
      console.log("You win! Paper beats rock.");
    } else if (computerSelection === "paper") {
      console.log("Tie!!!");
    } else {
      lose = lose + 1;
      console.log("You lose! Scissors beats paper.");
    }
  } else {
    if (computerSelection === "rock") {
      lose = lose + 1;
      console.log("You lose! Rock beats scissors.");
    } else if (computerSelection === "paper") {
      win = win + 1;
      console.log("You win! Scissors beats paper.");
    } else {
      console.log("Tie!!!");
    }
  }
}
