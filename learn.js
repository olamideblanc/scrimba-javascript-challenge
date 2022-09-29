let player = {
  name: "Peter",
  chips: 145}
let cards = [];
let hasBlackjack = false;
sumOfCards = 0;
let IsAlive = false;
let message = "";
let startGameBtn = document.getElementById("start-game-btn");
let showEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerScore = document.getElementById('player-el')
playerScore.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  }
  if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}


function startGame() {
  IsAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sumOfCards = firstCard + secondCard;

  renderGame();
}
function renderGame() {
  sumEl.textContent = "Sum: " + sumOfCards;
  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sumOfCards <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sumOfCards === 21) {
    message = " You have blackjack!!";
    hasBlackjack = true;
  } else {
    message = "You are out of the game";
    IsAlive = false;
  }
  showEl.textContent = message;
}

startGameBtn.addEventListener("click", startGame);

let newCardBtn = document.getElementById("new-card-btn");

function newCard() {
    if (IsAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sumOfCards += card;
        cards.push(card);
        renderGame();
    }

}
newCardBtn.addEventListener("click", newCard); 


