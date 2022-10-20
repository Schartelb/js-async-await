async function singleDraw() {
    deck = await shuffleDeck()
    card = await cardDraw(deck)
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
}
async function shuffleDeck() {
    deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    deck_id = deck.data.deck_id
    return (deck_id)
}
async function cardDraw(deck, num = 1) {
    card = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${num}`)
    return card
}

async function multipleDraw(num) {
    deck = await shuffleDeck()
    draws = await cardDraw(deck, num)
    draws.data.cards.forEach(c => {
        console.log(`${c.value} of ${c.suit}`)
    })
}

$(document).ready(async function () {
    var deck = await shuffleDeck()
    return deck
});

$('div').on("click", "#card-draw", () => {
    drawCard(deck)
})

async function drawCard(deck) {
    card = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=${num}`)
    await $('#card-pile').append('<li class=' + card.data.cards[0].suit + '>' + card.data.cards[0].value + ' of ' + card.data.cards[0].suit + '</li>')
}