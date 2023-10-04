document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();

  products.getData(url, options).then((food) => {
    ui.displayFood(food);
  });
});

// Request data
const url = "https://the-mexican-food-db.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3dd7ebf57msh259bb2d3f3ded90p1365e4jsn0c176b92836d",
    "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
  },
};

// Getting the products
class Products {
  async getData(url, options) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
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

    for (let i = 0; i < amount; i++) {
      result += `
      <div class="meal">
          <div class="meal-img">
            <img src="${food[i].image}" alt="" />
          </div>
          <div class="meal-txt">
            <h3>${food[i].title}</h3>
            <button type="button">Buy</button>
          </div>
        </div>
        `;
    }
    displayFood.innerHTML = result;
  }
}
