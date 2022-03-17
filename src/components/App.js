//function to print/show data on screen//
export function deckOnScreen(cards){
    return `<div class="cardPokemon">
    <p><img src="${cards.image}"</p>
    <h2>${cards.id}</h2>
    </div>`
  }
