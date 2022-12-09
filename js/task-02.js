const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");
console.log(ulIngredients);

// ingredients.forEach((x) => {
//   const liItem = document.createElement("li");
//   liItem.textContent = x;
//   ulIngredients.append(liItem);
//   liItem.classList.add("item");
// });

for (const ingredient of ingredients) {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  ulIngredients.append(liItem);
  liItem.classList.add("item");
}
