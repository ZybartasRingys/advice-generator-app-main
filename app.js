"use strict";

const adviceNumber = document.getElementById("number");
const adviceText = document.getElementById("advice");

const url = "https://api.adviceslip.com/advice";

//async fetch function to get data from api

async function getAdvice() {
  let url = "https://api.adviceslip.com/advice";

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// render advices to page function

async function renderAdvice() {
  let text = await getAdvice();

  //destructing object from getAdvice
  let { id, advice } = text.slip;

  let html = "";

  let htmlSegment = `<div class="container">
      <div class="card">
        <h1 id="number">Advice #${id}</h1>
        <p class="advice" id="advice">
         "${advice}"
        </p>
        <div class="image"> </div>
      </div>
      <button aria-label="generate advice" class="dice" id="dice">
        
      </button>
    </div>`;

  html += htmlSegment;

  // inser to html

  let container = document.querySelector(".container");
  container.innerHTML = html;

  // btn event with callback function render advice to get new advice

  const btn = document.getElementById("dice");
  btn.addEventListener("click", renderAdvice);
}

window.onload = renderAdvice;
