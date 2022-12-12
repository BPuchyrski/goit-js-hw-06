const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  text.textContent = event.currentTarget.value.trim();
  if (text.textContent === "") {
    text.textContent = "Anonymus";
  }
});
