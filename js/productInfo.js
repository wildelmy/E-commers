const url = window.location;
const productId = url.search[1];

const imgContainer = document.getElementById("img-container");
const nameContainer = document.getElementById("name-container");
const priceContainer = document.getElementById("price-container");
const descriptionContainer = document.getElementById("description-container");
const quantity = document.querySelector("input");
const addProductBtn = document.getElementById("add-product-btn");

const selectedProduct = allProducts.find((product) => product.id == productId);

imgContainer.src = selectedProduct.img;
nameContainer.innerText = selectedProduct.name;
priceContainer.innerText = selectedProduct.price;
descriptionContainer.innerText = selectedProduct.description;

addProductBtn.addEventListener("click", function () {
  let total = Number(quantity.value);
  for (let i = 1; i <= total; i++) {
    let savedProducts = window.localStorage.getItem("savedProducts");
    if (savedProducts) {
      savedProducts = JSON.parse(savedProducts);
      savedProducts.push(selectedProduct);
      savedProducts = JSON.stringify(savedProducts);
      window.localStorage.setItem("savedProducts", savedProducts);
    } else {
      let savedProduct = JSON.stringify([selectedProduct]);
      window.localStorage.setItem("savedProducts", savedProduct);
    }
  }
  updateShop();
});
