import { Products } from "./products.js";
import { Storage } from "./storage.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const products = new Products();
  const ui = new UI();

  products
    .getData(url)
    .then((food) => {
      ui.displayFood(food);
      Storage.saveFood(food);
    })
    .then(() => {
      ui.getFoodButtons();
    });
});
