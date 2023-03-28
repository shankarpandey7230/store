import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (products, element) => {
  //   console.log(products, element); and we're gonna go with element
  // display prodcuts HTML Brighton way we could set up separate very well but I might as well do it right away where I'm going to eat right now over my product alright

  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return `<article class="product">
    <div class="product-container">
      <img src="${image}" class="product-img img" alt="${name}" />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${id}">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
    })
    .join("");
  element.addEventListener("click", function (e) {
    const parent = e.target.parentElement;
    if (parent.classList.contains("product-cart-btn")) {
      addToCart(parent.dataset.id);
    }
    // console.log(parent);
  });
};

export default display;
