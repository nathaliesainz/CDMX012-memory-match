//function to print/show data on screen
export function deckOnScreen(cards){
    return `<div class="cardContainer">
    <div class="innerCardPokemon">
      <div class="frontCardPokemon">
        <p><img src="${cards.image}"</p>
        <h2>${cards.id}</h2>
      </div>
      <div class="backCardPokemon">
       <img src="./img/backCard.png" style="width:100px;height:100px;">
      </div>
    </div>
    </div>`
  }
