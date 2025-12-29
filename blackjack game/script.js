let player = {
    name: "Rahul",
    chips: 145
}
let sum = 0
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
// let playerEl = document.getElementById("player-el");
let message = "";

// playerEl.textContent = player.name + ": $" + player.chips;

function renderGame() {
    cardEl.textContent = "Cards: ";
    for(let i = 0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "sum: " + sum;
    if(sum<21) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message="Wohoo! You've got blackjack!";
        hasBlackJack = true;
    } else if(sum > 21){
        message="You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card); 
        renderGame();
    }
}

function startGame() {   
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame();
}

function getRandomCard() {
    let randCard =  Math.floor(Math.random()*13)+1; 
    if(randCard === 1) {
        return 11
    } else if(randCard>10) {
        return 10
    } else {
        return randCard
    }
}