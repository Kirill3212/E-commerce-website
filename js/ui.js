export class UI {
  displayFood(food) {
    const displayFood = document.getElementById("food-display");
    let amount = 6;
    let result = "";
    let prices = ["200$", "300$", "150$", "400$", "370$", "575"];

    for (let i = 0; i < amount; i++) {
      result += `
      <div class="meal">
          <div class="meal-img">
            <img src="${food.categories[i].strCategoryThumb}" alt="" />
          </div>
          <div class="meal-txt">
            <h3>${food.categories[i].strCategory}</h3>
            <span>Price: <span class='price'>${prices[i]}</span></span>
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
        let food = JSON.parse(localStorage.getItem("food"));
        return food.categories.find((foodEl) => foodEl === id);
      });
    });
  }
}
