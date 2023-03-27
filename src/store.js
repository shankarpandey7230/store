import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    // console.log(product);
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, company, price, colors, image };
  });
  setStorageItem("store", store);
};
console.log(store);
const findProduct = () => {};
export { store, setupStore, findProduct };
