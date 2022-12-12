const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
