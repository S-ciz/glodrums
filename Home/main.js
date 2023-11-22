import { truncate } from "./utility.js";

const Cards = document.querySelector("main.how_to_help");
const maxWordCount = 10;
let print = console.log;

const arrCards = [
  {
    id: 1,
    img: "images/geld.png",
    title: "Monetary Donations",
    text: "Every contribution, no matter how big or small, will make a difference. Your generous donations will go directly towards purchasing drum kits, drumsticks, practice pads, and other necessary equipment. To donate, please visit our fundraising page [provide a link] or contact us directly [provide contact details]",
  },
  {
    id: 2,
    img: "images/3drums.jpg",
    title: "Instrument Donations",
    text: " you have a drum kit or drumming equipment that is in good condition and you no longer use, consider donating it to our cause. Your unused instruments can find a new home and inspire young drummers on their musical journey.",
  },
  {
    id: 3,
    img: "images/spreadword.jpg",
    title: "Spread the Word",
    text: "Share our campaign with your friends, family, and colleagues who might be interested in supporting music education for children. Use social media platforms, community groups, and personal networks to amplify our message and reach a wider audience.",
  },
  {
    id: 4,
    img: "images/volunteer.png",
    title: "Volunteer",
    text: "If you are a drumming enthusiast or a music educator, consider volunteering your time and expertise to help teach children in our program. Your mentorship will have a lasting impact on their musical growth and personal development.",
  },
];



function displayCards() {
  for (let i = 0; i < arrCards.length; i++) {
    Cards.innerHTML += ` <section class="card">
   <div class="card_img"> 
       <img loading="lazy" alt="donate" src="${arrCards[i].img}"/>
   </div>
   <div> 
       <h3>${arrCards[i].title}</h3>
       <p>  ${truncate(arrCards[i].text, maxWordCount)}</p>
       <button> Read more</button>
   </div>

</section>`;
  }
}



window.addEventListener('DOMContentLoaded', displayCards)
