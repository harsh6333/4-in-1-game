const cardArray = [
  {
    name: "fries",
    img: "../Components/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../Components/images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../Components/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../Components/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../Components/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "../Components/images/pizza.png",
  },
  {
    name: "fries",
    img: "../Components/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../Components/images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../Components/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../Components/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../Components/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "../Components/images/pizza.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());
let CardChoosen = [];
let CardChoosenId = [];
let cardsWon = [];

let startBtn = document.getElementById("start");
let second = 00;
let count = 00;

let grid = document.querySelector("#grid");
let result = document.querySelector("#result");
let restart = document.querySelector(".restart");

function createboard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../Components/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}
createboard();

function checkmatch() {
  let cards = document.querySelectorAll("img");

  if (CardChoosenId[0] == CardChoosenId[1]) {
    cards[CardChoosenId[0]].setAttribute(
      "src",
      "../Components/images/blank.png"
    );
    cards[CardChoosenId[1]].setAttribute(
      "src",
      "../Components/images/blank.png"
    );
    console.log("Found a Match");
  }
  if (CardChoosen[0] == CardChoosen[1]) {
    cards[CardChoosenId[0]].setAttribute(
      "src",
      "../Components/images/white.png"
    );
    cards[CardChoosenId[1]].setAttribute(
      "src",
      "../Components/images/white.png"
    );

    cards[CardChoosenId[0]].removeEventListener("click", flipCard);
    cards[CardChoosenId[1]].removeEventListener("click", flipCard);

    cardsWon.push(CardChoosen);
  } else {
    cards[CardChoosenId[0]].setAttribute(
      "src",
      "../Components/images/blank.png"
    );
    cards[CardChoosenId[1]].setAttribute(
      "src",
      "../Components/images/blank.png"
    );
    console.log("Try Again");
  }

  result.textContent = cardsWon.length;
  CardChoosen = [];
  CardChoosenId = [];
  if (cardsWon.length == cardArray.length / 2) {
    result.textContent = "All Matched";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  CardChoosen.push(cardArray[cardId].name);
  CardChoosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (CardChoosen.length === 2) {
    setTimeout(checkmatch, 500);
  }
}

function rest() {
  window.location.reload();
}

restart.addEventListener("click", rest);
