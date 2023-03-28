import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    // console.log(value);
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        // console.log(name);
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, getElement(".products-container"));
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
        Sorry, no products matched your search</h3>`;
      }
      //   console.log(newStore);
    } else {
      display(store, getElement(".products-container"));
    }
  });
};

export default setupSearch;
