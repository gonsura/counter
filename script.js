const select = (selected) => document.querySelector(selected);
const click = (selector, fu) => selector.addEventListener("click", fu);

const saving = [];
let count = 0;

const increment = () => {
  select(".count-el").innerHTML = ++count;
};
const decrement = () => {
  if (count != 0) select(".count-el").innerHTML = --count;
};

const saveIt = () => {
  if (count == 0) return;
  saving.push(count);
  select(".saved").innerHTML = saving.join(" - ");
  select(".total").innerHTML = saving.reduce((a, b) => a + b);
  select(".count-el").innerHTML = count = 0;
};

click(select(".increment-btn"), increment);
click(select(".decrement-btn"), decrement);
click(select(".save"), saveIt);
