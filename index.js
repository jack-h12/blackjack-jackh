let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let messageEl = document.querySelector("#resulting-message")

let firstCard =  0
let secondCard =  0
let cards = []
let total = 0


function generateRandomCards() {
    firstCard = Math.floor(Math.random() * 13) + 1
    secondCard = Math.floor(Math.random() * 13) + 1
    cards = [firstCard, secondCard]
    total = firstCard + secondCard
    return cards
}

cards = generateRandomCards()


function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let index = 0; index < cards.length - 1; index += 1 ) {
        cardsEl.textContent += cards[index] + ", "
    }
    cardsEl.textContent += cards[cards.length -1]
    sumEl.textContent = "Sum: " + total


    if (total < 21) {
        messageEl.textContent = "Still in the game twin. You tryna draw another card?"
    } else if (total === 21) {
        messageEl.textContent = "YOU HAVE WON TWIN!!!"
    } else {
        messageEl.textContent = "twin you lost :( "
    }
}

function startGame() {
    renderGame()
}

function newCard() {
    let newCard = Math.floor(Math.random() * 13) + 1
    cards.push(newCard)
    total += newCard
    renderGame()
}

function newGame() {
    generateRandomCards()
    renderGame()
}