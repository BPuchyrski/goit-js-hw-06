function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");

const fun = () => {
  let colorito = getRandomHexColor();
  body.style.backgroundColor = colorito;
  color.textContent = colorito;
};
btn.addEventListener("click", fun);
