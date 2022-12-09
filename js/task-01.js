const list = document.querySelector("#categories");
const numOfCategories = list.querySelectorAll("li.item");
console.log(`Number of categories: ${numOfCategories.length}`);

const categories = numOfCategories.forEach((x) => {
  console.log(" ");
  console.log(`Category: ${x.querySelector("h2").textContent}`);
  console.log(`Elements: ${x.querySelectorAll("li").length}`);
});
