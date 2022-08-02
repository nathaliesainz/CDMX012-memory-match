import data from './data/pokemon/pokemon.js'
import { deckOnScreen } from './components/App.js';

//declaración de variables para interactuar con el dom y la database
const nodoRoot = document.getElementById('root')
const firstSet = Object.values(data.items);
const secondSet = Object.values(data.items);
const sectionCards = document.createElement('div')
sectionCards.classList='sectionCards'
let finalSet = firstSet.concat(secondSet);
finalSet = finalSet.sort(() => Math.random() - 0.5);

//ciclo con el que iteramos cada uno de los pokemones
finalSet.forEach(pokemon => {
  sectionCards.appendChild(deckOnScreen(pokemon))
});

// printing deck on HTML and showing it on screen
nodoRoot.appendChild(sectionCards)
