import { arrCards } from "./cards.js";
//truncate text
export function truncate(text, max) {
  let content = "";

  //place text in array
  let contentArray = text.split(" ");
  if (contentArray.length <= max) {
    content = text;
  } else {
    for (let i = 0; i < max; i++) {
      content += contentArray[i] + " ";
    }
    content += "...";
  }

  return content;
}

export function toggleCard(e) {
  let id = e.target.className;

  let cardItem = arrCards.filter((item) => item.id == id)[0];

  console.log(cardItem);

  //display content on modal
  document.querySelector("#modal_text").textContent = cardItem.text;
  //show modal
  document.querySelector("div.modal").style.display = "grid";
}
