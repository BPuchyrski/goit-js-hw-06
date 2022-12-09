function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");

const fun = () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};
btn.addEventListener("click", fun);
