export class UI {
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
            <button type="button" class='buy-btn' data-id="${food.categories[i].idCategory}">Buy</button>
          </div>
        </div>
        `;
    }
    displayFood.innerHTML = result;
  }

  getFoodButtons() {
    const buttons = [...document.querySelectorAll(".buy-btn")];
    buttons.forEach((button) => {
      let id = button.dataset.id;
      button.addEventListener("click", (e) => {
        console.log("clicked", e.target.dataset);
        // Storage.getFood(id);
      });
    });
  }
}
