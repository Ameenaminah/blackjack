let player = {
    name: "Per",
    chips: 200
}
let message = '';
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el")


function getRandomCard () {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    return randomCard
}

function startGame() {
     isAlive = true;
    let firstCard = getRandomCard ();
    let secondCard = getRandomCard ();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    render()
}
function render() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
    
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '

    sumEl.textContent = 'Sum: ' + sum
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        render()
    }   
}

playerEl.textContent = player.name + ": $" + player.chips;