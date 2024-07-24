let calculation = localStorage.getItem(`calculation`) || "";

display();

function calculator(value) {
  calculation += value;
  display();
  localStorage.setItem("calculation", calculation);
}

function display() {
  document.querySelector(`.js-display`).innerHTML = calculation;
}
