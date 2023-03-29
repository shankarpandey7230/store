import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  //   console.log(store);
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  //   setup filter

  let maxPrice = store.map((product) => product.price);
  //   console.log(maxPrice);
  maxPrice = Math.max(...maxPrice);
  //   console.log(maxPrice); largest value
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value:$ ${maxPrice}`;
  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    // console.log(typeof value); string value  need in number
    priceValue.textContent = `Value:${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement(".products-container"));
    if (newStore.length < 1) {
      const product = getElement(".products-container");
      product.innerHTML = `<h3 class="filter-error">Sorry no products mathed</h3>`;
    }
  });
};

export default setupPrice;
