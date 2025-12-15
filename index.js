let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let messageEl = document.querySelector("#resulting-message")

let firstCard =  0
let secondCard =  0
let cards = []
let total = 0

let isAlive = true
let isInGame = false

let player = {
    name: "Jack",
    dollars: 10000
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.dollars


function generateRandomCards() {
    firstCard = Math.floor(Math.random() * 13) + 1
    secondCard = Math.floor(Math.random() * 13) + 1
    cards = [firstCard, secondCard]
    total = firstCard + secondCard
    return cards
}

cards = generateRandomCards()


function renderGame() {
    if (cards === "") {
        cardsEl.textContent = "Cards: "
        sumEl.textContent = "Sum: " + total
        messageEl.textContent = ""
    }
    else if ( isAlive === true ) {
        cardsEl.textContent = "Cards: "
        for ( let index = 0; index < cards.length - 1; index += 1 ) {
            cardsEl.textContent += cards[index] + ", "
        }
        cardsEl.textContent += cards[cards.length -1]
        sumEl.textContent = "Sum: " + total

        if (total === "") {
            messageEl.textContent = ""
        }else if (total < 21) {
            messageEl.textContent = "Still in the game twin. You tryna draw another card?"
        } else if (total === 21) {
            messageEl.textContent = "YOU HAVE WON TWIN!!!"
            player.dollars = player.dollars * 10
            isAlive = false
        } else {
            messageEl.textContent = "twin you lost :("
            player.dollars = Math.round(player.dollars/1.25)
            isAlive = false
        }
    playerEl.textContent = player.name + ": $" + player.dollars
    }
}

function startGame() {
    if (isInGame === false) {
        cards = generateRandomCards()
        renderGame()
        isInGame = true
    }
}

function newCard() {
    isInGame = false
    let newCard = Math.floor(Math.random() * 13) + 1
    cards.push(newCard)
    total += newCard
    renderGame()
}

function newGame() {
    isAlive = true
    cards = ""
    total = ""
    renderGame()
}