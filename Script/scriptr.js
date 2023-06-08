let rockBtn = document.querySelector(".rock");
let scissorsBtn = document.querySelector(".scissor");
let paperBtn = document.querySelector(".paper");
let playerscore_p = document.querySelector(".p-count");
let computerscore_p = document.querySelector(".c-count");
let remianing_div = document.querySelector(".movesleft");
let computerchoice_h4 = document.getElementById("c-choice");
let movesrem_span = document.getElementById("movesrem");
let finalcomputerscore_h4 = document.getElementById("cs");
let finalplayerscores_h4 = document.getElementById("ys");
let finaldraws_h4 = document.getElementById("td");
let celeb_h3 = document.getElementById("celeb");
let result_div = document.querySelector(".result");
let options_div = document.querySelector(".options");
let yourchoice_div = document.querySelector(".move");
let UserScore = 0;
let ComputerScore = 0;
let moves = 0;

function game() {
  //win
  function win() {
    UserScore++;
    ComputerScore = ComputerScore;
    playerscore_p.innerHTML = UserScore;
    computerscore_p.innerHTML = ComputerScore;
    moves++;
    movesrem_span.innerHTML = `Moves Left: ${10 - moves}`;
  }
  //loss
  function loose() {
    UserScore = UserScore;
    ComputerScore++;
    playerscore_p.innerHTML = UserScore;
    computerscore_p.innerHTML = ComputerScore;
    moves++;
    movesrem_span.innerHTML = `Moves Left: ${10 - moves}`;
  }
  //draw
  function draw() {
    UserScore = UserScore;
    ComputerScore = ComputerScore;
    playerscore_p.innerHTML = UserScore;
    computerscore_p.innerHTML = ComputerScore;
    moves++;
    movesrem_span.innerHTML = `Moves Left: ${10 - moves}`;
  }
  //Gameover
  function gameover() {
    result_div.classList.remove("hidden");
    finalcomputerscore_h4.innerHTML = "Final Computer Score: " + ComputerScore;
    finalplayerscores_h4.innerHTML = "Final Player Score: " + UserScore;
    finaldraws_h4.innerHTML =
      "Total Draws: " + (10 - ComputerScore - UserScore);
    if (ComputerScore > UserScore) {
      celeb_h3.innerHTML = "You Lost! Better Luck next Time";
    }
    if (ComputerScore < UserScore) {
      celeb_h3.innerHTML = "You Won! Yayy";
    }
    if (ComputerScore == UserScore) {
      celeb_h3.innerHTML = "Draw! Better Luck next Time";
    }
    UserScore = 0;
    ComputerScore = 0;
    movesrem_span.innerHTML = `Moves Left: ${11}`;
    moves = 0;
    options_div.classList.add("hidden");
    remianing_div.classList.add("hidden");
    computerchoice_h4.classList.add("hidden");
    yourchoice_div.classList.add("hidden");

    // reload;
    const reloadBtn = document.querySelector(".reload");
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
      options_div.classList.remove("hidden");
      remianing_div.classList.remove("hidden");
      computerchoice_h4.classList.remove("hidden");
      yourchoice_div.classList.remove("hidden");
    });
  }

  //Computer Choice
  function computerchoices() {
    const choice = ["Rock", "Paper", "Scissors"];
    let randomnumber = Math.floor(Math.random() * 3);
    return choice[randomnumber];
  }

  //Player Choice and Computer Choice logic and Execution
  function choices(playerchoose) {
    let computerchoose = computerchoices();
    if (moves == 10) {
      gameover();
    }
    switch (playerchoose + " " + computerchoose) {
      case "p Rock":
      case "s Paper":
      case "r Scissors":
        win();
        computerchoice_h4.innerHTML = "Computer Choose: " + computerchoose;
        break;
      case "r Paper":
      case "p Scissors":
      case "s Rock":
        loose();
        computerchoice_h4.innerHTML = "Computer Choose: " + computerchoose;
        break;
      case "r Rock":
      case "p Paper":
      case "s Scissors":
        draw();
        computerchoice_h4.innerHTML = "Computer Choose: " + computerchoose;
        break;
    }
  }

  //Main running function of game
  function main() {
    rockBtn.addEventListener("click", function () {
      choices("r");
    });
    paperBtn.addEventListener("click", function () {
      choices("p");
    });
    scissorsBtn.addEventListener("click", function () {
      choices("s");
    });
  }
  main();
}

game();
