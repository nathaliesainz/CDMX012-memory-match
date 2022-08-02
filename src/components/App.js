//cards with both sides and its content
let options = [];

export function deckOnScreen(cards) {
  let cardContainer = document.createElement("div");
  cardContainer.className = "cardContainer";

  let innerCard = document.createElement("div");
  innerCard.className = "innerCard";

  let frontCard = document.createElement("div");
  frontCard.className = "frontCard";

  let cardName = document.createElement("div");
  cardName.textContent = cards.id;

  let frontImage = document.createElement("img");
  frontImage.className = "frontImage";
  frontImage.src = cards.image;

  let backCard = document.createElement("div");
  backCard.className = "backCard";
  backCard.setAttribute("name", cards.id);

  let backImage = document.createElement("img");
  backImage.className = "backImage";
  backImage.src = "./img/backCard.png";

  cardContainer.appendChild(innerCard);
  innerCard.appendChild(frontCard);
  frontCard.appendChild(frontImage);
  frontCard.appendChild(cardName);
  innerCard.appendChild(backCard);
  backCard.appendChild(backImage);


  cardContainer.addEventListener("click", () => {
    backCard.style.display = "none";
    options.push(backCard);

    if (options.length === 2) {
      if (options[0].getAttribute("name") === options[1].getAttribute("name")) {
        console.log("match");
        //frontCard.style.border = "solid green 2px";
      } else {
        console.log(
          options[0].getAttribute("name"),
          options[1].getAttribute("name")
        );
        options.forEach((cards) => {
          setTimeout(() => (cards.style.display = ""), 1000);
        });
      }
      options = [];
    }
  });

  return cardContainer;
}
