let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
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
let exitbtn = document.querySelector('.exit')

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
    const choice = ["1", "2", "3","4","5","6"];
    let randomnumber = Math.floor(Math.random() * 6);
    return choice[randomnumber];
  }

  //Player Choice and Computer Choice logic and Execution
  function choices(playerchoose) {
    let computerchoose = computerchoices();
    if (moves == 10) {
      gameover();
    }
    switch (playerchoose + " " + computerchoose) {
      case "tw 1":
      case "th 1":
      case "fo 1":
      case "fi 1":
      case "s 1":
      case "th 2":
      case "fo 2":
      case "fi 2":
      case "s 2":
      case "fo 3":
      case "fi 3":
      case "s 3":
      case "fi 4":
      case "s 4":
      case "s 5":
        win();
        computerchoice_h4.innerHTML = "Computer Choose: " + computerchoose;
        break;
      case "o 2":
      case "o 3":
      case "o 4":
      case "o 5":
      case "o 6":
      case "tw 3":
      case "tw 4":
      case "tw 5":
      case "tw 6":
      case "th 4":
      case "th 5":
      case "th 6":
      case "fi 4":
      case "s 4":
      case "s 5":
        loose();
        computerchoice_h4.innerHTML = "Computer Choose: " + computerchoose;
        break;
      case "tw 2":
      case "fo 4":
      case "fi 5":
      case "s 6":
      case "o 1":
      case "th 3":
        draw();
        computerchoice_h4.innerHTML = "Computer Choose: " + computerchoose;
        break;
    }
  }

  //Main running function of game
  function main() {
    oneBtn.addEventListener("click", function () {
      choices("o");
    });
    twoBtn.addEventListener("click", function () {
      choices("tw");
    });
    threeBtn.addEventListener("click", function () {
      choices("th");
    });
    fourBtn.addEventListener("click", function () {
      choices("fo");
    });
    fiveBtn.addEventListener("click", function () {
      choices("fi");
    });
    sixBtn.addEventListener("click", function () {
      choices("s");
    });
  }
  main();
  // exitbtn.add('click',)
}

game();
