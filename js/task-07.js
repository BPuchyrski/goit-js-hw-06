const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.log();
slider.addEventListener("input", (e) => {
  let fontSize = e.currentTarget.value + "px";
  text.style.fontSize = fontSize;
});
