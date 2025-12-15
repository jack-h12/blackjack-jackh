let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let messageEl = document.querySelector("#resulting-message")

let firstCard =  0
let secondCard =  0
let cards = []
let total = 0

let isAlive = true
let isInGame = false


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
            isAlive = false
        } else {
            messageEl.textContent = "twin you lost :( "
            isAlive = false
        }
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