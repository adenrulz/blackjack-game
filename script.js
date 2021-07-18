
let playerInfo = {
    name : prompt("Please enter your name"),
    chips: prompt("Please entet the chips you have")
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
message = "We're logging out";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
let startBtn = document.querySelector("#start-btn");
let newCardBtn = document.querySelector("#new-card");

playerEl.textContent = playerInfo.name + " $" + playerInfo.chips;
const getRandomCard = () => {
    let randomNumber = (Math.floor(Math.random() * 13) + 1);
    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber == 1){
        return 11;
    }
    else {
       return randomNumber;
    }
}
const startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true

    renderGame();  
}
startBtn.addEventListener("click", startGame)
const renderGame = () => {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

const newCard = () => {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}
newCardBtn.addEventListener("click", newCard)

console.log(message);