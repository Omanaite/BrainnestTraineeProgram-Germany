var counterRound = 1;

function addEventListeners (){
  document.querySelectorAll('.btnSelection').forEach(link => link.addEventListener('click', () => {
      playerSelection(link.id);
  }));
  document.querySelectorAll('.btnAgain').forEach(link => link.addEventListener('click', () => {
      playAgain();
  }));
}

function startFirstStep() {
    document.getElementById("start-game").classList.toggle("hidden");
    document.getElementById("roundContainer").classList.toggle("hidden");
  
}
function roundSelection(rS) {
    let rounds = document.getElementById("roundSelection");
    rounds.setAttribute("value", rS + 1);
    document.getElementById("roundContainer").classList.toggle("hidden");
    document.getElementById("playerSelectionContainer").classList.toggle("hidden");
    addEventListeners();
}



function playerSelection(option) {
    document.getElementById("playerSelectionContainer").classList.toggle("hidden");
    let playerSelection = document.getElementById("playerSelection");
    playerSelection.setAttribute("value", option);
    playRound(playerSelection.value,computerPlay());
  }
  
function computerPlay() {
    let randomize = ["rock", "paper", "scissors"];
    return randomize[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    
    const results = document.getElementById("results"); 
    const p = document.createElement("p");    
    let validate = document.getElementById("roundSelection").value;
    if (counterRound < validate){
        if (playerSelection === "rock") 
        {
            if (computerSelection === "rock") {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection} </br> tie!!!!` ;
              results.appendChild(p);
            } else if (computerSelection === "paper") {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection} </br> You lose! Paper beats rock!!!!` ;
              results.appendChild(p);
              lose = lose + 1;
            } else {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection} </br> You win! Rock beats scissors!!!!` ;
              results.appendChild(p);
              win = win + 1;
            }
        } 
        else if (playerSelection === "paper") 
        {
            if (computerSelection === "rock") {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection}</br> You win! Paper beats rock!!!!` ;
              results.appendChild(p);
              win = win + 1;
            } else if (computerSelection === "paper") {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection}</br> tie!!!!` ;
              results.appendChild(p);
            } else {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection}</br> You lose! Scissors beats paper!!!!` ;
              results.appendChild(p);
              lose = lose + 1;
            }
        } 
        else 
        {
            if (computerSelection === "rock") {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection}</br> You lose! Rock beats scissors!!!!` ;
              results.appendChild(p);
              lose = lose + 1;
            } else if (computerSelection === "paper") {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection}</br> You win! Scissors beats paper!!!!` ;
              results.appendChild(p);
              win = win + 1;
            } else {
              p.innerHTML= `Round : ${counterRound} </br> ${playerSelection} vs ${computerSelection}</br> tie!!!!` ;
              results.appendChild(p);
            }
        }
        counterRound++;
        document.getElementById("playerSelectionContainer").classList.toggle("hidden");

        if(counterRound == validate ){
            result();
        }   
    };

}

var win = 0;
var lose = 0;

function result() {
    document.getElementById("playerSelectionContainer").classList.toggle("hidden");
    let round = document.getElementById("roundSelection").value;
    const results = document.getElementById("results"); 
    const p = document.createElement("p");
    const span = document.createElement("span")  
    round--;
    p.innerHTML= `Has won ${win} rounds of ${round}</br> Has lose ${lose} rounds of ${round} </br>`;
    results.appendChild(p);
    if (win > lose) {
      span.innerHTML= "You have won the Game";
      results.appendChild(span);
    } else if (lose > win) {
      span.innerHTML= "You have lost the Game";
      results.appendChild(span);
    } else if (lose === win) {
      span.innerHTML= "No winners";
      results.appendChild(span);
    }
    counterRound = 1;
    win = 0;
    lose = 0;
    document.getElementById("btnAgain").classList.toggle("hidden");
    

}

function playAgain(){

    location.reload();
         
}