import { truncate, toggleCard as clickCard } from "./utility.js";
import { arrCards } from "./cards.js";

let print = console.log;

function displayCards() {
  //get cards wrapper
  const Cards = document.querySelector("main.how_to_help");
  const maxWordCount = 10;

  for (let i = 0; i < arrCards.length; i++) {
    Cards.innerHTML += ` <section class="card">
   <div class="card_img"> 
       <img loading="lazy" alt="donate" src="${arrCards[i].img}"/>
   </div>
   <div> 
       <h3>${arrCards[i].title}</h3>
       <p>  ${truncate(arrCards[i].text, maxWordCount)}</p>
       <button class="${arrCards[i].id}" id="card_btn"> Read more</button>
   </div>

</section>`;
  }
}

function loadContent() {
  //load cards
  displayCards();
  //load functions
  const card_btns_arr = document.querySelectorAll("button#card_btn");
  card_btns_arr.forEach((btn) => {
    const btnId = btn.className;
    btn.addEventListener("click", clickCard);
  });
}

window.addEventListener("DOMContentLoaded", loadContent);

//form

const form = document.querySelector("form");
const input = document.querySelector("input#whatsapp");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cellnumber = "653838052";
  if (input.value.trim() !== "") {
    window.location.href = `https://wa.me/+27${cellnumber}?text=${input.value}`;
  } else {
    //alert fields
    window.alert("Please Enter message!!!!");
  }

  //clear fields
  input.value = "";
});
