// Getting the products
export class Products {
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
