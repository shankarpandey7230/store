// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
// console.log(cartItemCountDOM);
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id);
  // console.log(item);
  if (!item) {
    let product = findProduct(id);
    // console.log(product);
    // adding items to cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the DOM
    addToCartDOM(product);
  } else {
    // updating the quantities
  }

  // console.log(id);
  // more stuffs to come
  openCart();
};

const init = () => {
  console.log(cart);
};
init();
