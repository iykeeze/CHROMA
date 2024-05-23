const SCHEMER = document.getElementById("color");
console.log(SCHEMER);

const BTN = document.getElementById("btn");
console.log(BTN);

BTN.addEventListener("click", function () {
  const colors = ["red", "green", "blue", "purple", "orange", "pink", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  SCHEMER.style.backgroundColor = randomColor;

  const NUMBERS = ["5px", "30px", "50px", "70px", "90px", "130px", "160px"];
  const randomNumder = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  SCHEMER.style.height = randomNumder;
});
