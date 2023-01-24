const countEl = document.querySelector(".count-el");
const btnIncrement = document.querySelector(".increment-btn");
const save = document.querySelector(".save");
const saved = document.querySelector(".saved");
const total = document.querySelector(".total");
const saving = [];
let count = 0;

function increment() {
  count++;
  countEl.innerHTML = count;
}

function saveIt() {
  if (count == 0) return;
  saving.push(count);
  console.log(saving);
  saved.innerHTML = saving.join(" - ");
  total.innerHTML = saving.reduce((a, b) => a + b);
  count = 0;
  countEl.innerHTML = count;
}

function click(selector, fu) {
  selector.addEventListener("click", fu);
}

click(btnIncrement, increment);
click(save, saveIt);
