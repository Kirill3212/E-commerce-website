document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();

  products.getData(url).then((food) => {
    ui.displayFood(food);
  });
});

// Request data
const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

// Getting the products
class Products {
  async getData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log("Result-1", result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

class UI {
  displayFood(food) {
    const displayFood = document.getElementById("food-display");
    let amount = 6;
    let result = "";
    console.log("Result-2", food);
    console.log(food.categories[0]);
    for (let i = 0; i < amount; i++) {
      result += `
      <div class="meal">
          <div class="meal-img">
            <img src="${food.categories[i].strCategoryThumb}" alt="" />
          </div>
          <div class="meal-txt">
            <h3>${food.categories[i].strCategory}</h3>
            <button type="button" class='buy-btn'>Buy</button>
          </div>
        </div>
        `;
    }
    displayFood.innerHTML = result;
  }

  getFoodButtons() {
    const buttons = [...document.querySelectorAll(".buy-btn")];
    console.log(buttons);
  }
}
