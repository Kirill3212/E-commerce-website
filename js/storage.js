export class Storage {
  static saveFood(food) {
    localStorage.setItem("food", JSON.stringify(food));
  }
  static getFood(id) {
    let food = JSON.parse(localStorage.getItem("food"));
    // console.log(food.categories.find((foodEl) => foodEl === id));
  }
}
